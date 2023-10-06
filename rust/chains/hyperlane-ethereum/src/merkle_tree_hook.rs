#![allow(missing_docs)]
use std::num::NonZeroU64;
use std::ops::RangeInclusive;
use std::sync::Arc;

use async_trait::async_trait;
use ethers::prelude::Middleware;
use ethers_core::types::BlockNumber;
use hyperlane_core::accumulator::incremental::IncrementalMerkle;
use tracing::instrument;

use hyperlane_core::{
    ChainCommunicationError, ChainResult, Checkpoint, ContractLocator, HyperlaneChain,
    HyperlaneContract, HyperlaneDomain, HyperlaneProvider, Indexer, LogMeta, MerkleTreeHook,
    MerkleTreeInsertion, SequenceIndexer, H256,
};

use crate::contracts::merkle_tree_hook::{MerkleTreeHook as MerkleTreeHookContract, Tree};
use crate::trait_builder::BuildableWithProvider;
use crate::EthereumProvider;

impl Into<IncrementalMerkle> for Tree {
    fn into(self) -> IncrementalMerkle {
        let branch = self
            .branch
            .iter()
            .map(|v| v.into())
            .collect::<Vec<_>>()
            // we're iterating over a fixed-size array and want to collect into a
            // fixed-size array of the same size (32), so this is safe
            .try_into()
            .unwrap();
        IncrementalMerkle::new(branch, self.count.as_usize())
    }
}

pub struct MerkleTreeHookBuilder {}

#[async_trait]
impl BuildableWithProvider for MerkleTreeHookBuilder {
    type Output = Box<dyn MerkleTreeHook>;

    async fn build_with_provider<M: Middleware + 'static>(
        &self,
        provider: M,
        locator: &ContractLocator,
    ) -> Self::Output {
        Box::new(EthereumMerkleTreeHook::new(Arc::new(provider), locator))
    }
}

pub struct MerkleTreeHookIndexerBuilder {
    pub finality_blocks: u32,
}

#[async_trait]
impl BuildableWithProvider for MerkleTreeHookIndexerBuilder {
    type Output = Box<dyn SequenceIndexer<MerkleTreeInsertion>>;

    async fn build_with_provider<M: Middleware + 'static>(
        &self,
        provider: M,
        locator: &ContractLocator,
    ) -> Self::Output {
        Box::new(EthereumMerkleTreeHookIndexer::new(
            Arc::new(provider),
            locator,
            self.finality_blocks,
        ))
    }
}

#[derive(Debug)]
/// Struct that retrieves event data for an Ethereum MerkleTreeHook
pub struct EthereumMerkleTreeHookIndexer<M>
where
    M: Middleware,
{
    contract: Arc<MerkleTreeHookContract<M>>,
    provider: Arc<M>,
    finality_blocks: u32,
}

impl<M> EthereumMerkleTreeHookIndexer<M>
where
    M: Middleware + 'static,
{
    /// Create new EthereumMerkleTreeHookIndexer
    pub fn new(provider: Arc<M>, locator: &ContractLocator, finality_blocks: u32) -> Self {
        Self {
            contract: Arc::new(MerkleTreeHookContract::new(
                locator.address,
                provider.clone(),
            )),
            provider,
            finality_blocks,
        }
    }
}

#[async_trait]
impl<M> Indexer<MerkleTreeInsertion> for EthereumMerkleTreeHookIndexer<M>
where
    M: Middleware + 'static,
{
    #[instrument(err, skip(self))]
    async fn fetch_logs(
        &self,
        range: RangeInclusive<u32>,
    ) -> ChainResult<Vec<(MerkleTreeInsertion, LogMeta)>> {
        let events = self
            .contract
            .inserted_into_tree_filter()
            .from_block(*range.start())
            .to_block(*range.end())
            .query_with_meta()
            .await?;

        let logs = events
            .into_iter()
            .map(|(log, log_meta)| {
                (
                    MerkleTreeInsertion::new(log.index, H256::from(log.message_id)),
                    log_meta.into(),
                )
            })
            .collect();
        Ok(logs)
    }

    #[instrument(level = "debug", err, ret, skip(self))]
    async fn get_finalized_block_number(&self) -> ChainResult<u32> {
        Ok(self
            .provider
            .get_block_number()
            .await
            .map_err(ChainCommunicationError::from_other)?
            .as_u32()
            .saturating_sub(self.finality_blocks))
    }
}

#[async_trait]
impl<M> SequenceIndexer<MerkleTreeInsertion> for EthereumMerkleTreeHookIndexer<M>
where
    M: Middleware + 'static,
{
    async fn sequence_and_tip(&self) -> ChainResult<(Option<u32>, u32)> {
        // The InterchainGasPaymasterIndexerBuilder must return a `SequenceIndexer` type.
        // It's fine if only a blanket implementation is provided for EVM chains, since their
        // indexing only uses the `Index` trait, which is a supertrait of `SequenceIndexer`.
        // TODO: if `SequenceIndexer` turns out to not depend on `Indexer` at all, then the supertrait
        // dependency could be removed, even if the builder would still need to return a type that is both
        // ``SequenceIndexer` and `Indexer`.
        let tip = self.get_finalized_block_number().await?;
        Ok((None, tip))
    }
}

/// A reference to a Mailbox contract on some Ethereum chain
#[derive(Debug)]
pub struct EthereumMerkleTreeHook<M>
where
    M: Middleware,
{
    contract: Arc<MerkleTreeHookContract<M>>,
    domain: HyperlaneDomain,
    provider: Arc<M>,
}

impl<M> EthereumMerkleTreeHook<M>
where
    M: Middleware,
{
    /// Create a reference to a mailbox at a specific Ethereum address on some
    /// chain
    pub fn new(provider: Arc<M>, locator: &ContractLocator) -> Self {
        Self {
            contract: Arc::new(MerkleTreeHookContract::new(
                locator.address,
                provider.clone(),
            )),
            domain: locator.domain.clone(),
            provider,
        }
    }
}

impl<M> HyperlaneChain for EthereumMerkleTreeHook<M>
where
    M: Middleware + 'static,
{
    fn domain(&self) -> &HyperlaneDomain {
        &self.domain
    }

    fn provider(&self) -> Box<dyn HyperlaneProvider> {
        Box::new(EthereumProvider::new(
            self.provider.clone(),
            self.domain.clone(),
        ))
    }
}

impl<M> HyperlaneContract for EthereumMerkleTreeHook<M>
where
    M: Middleware + 'static,
{
    fn address(&self) -> H256 {
        self.contract.address().into()
    }
}

#[async_trait]
impl<M> MerkleTreeHook for EthereumMerkleTreeHook<M>
where
    M: Middleware + 'static,
{
    #[instrument(skip(self))]
    async fn latest_checkpoint(&self, maybe_lag: Option<NonZeroU64>) -> ChainResult<Checkpoint> {
        let mut call = self.contract.latest_checkpoint();
        if let Some(lag) = maybe_lag {
            let fixed_block_number: BlockNumber = self
                .provider
                .get_block_number()
                .await
                .map_err(ChainCommunicationError::from_other)?
                .saturating_sub(lag.get().into())
                .into();
            call = call.block(fixed_block_number);
        };

        let (root, index) = call.call().await?;
        Ok(Checkpoint {
            merkle_tree_hook_address: self.address(),
            merkle_tree_hook_domain: self.domain.id(),
            root: root.into(),
            index,
        })
    }

    #[instrument(skip(self))]
    #[allow(clippy::needless_range_loop)]
    async fn tree(&self, maybe_lag: Option<NonZeroU64>) -> ChainResult<IncrementalMerkle> {
        let mut call = self.contract.tree();
        if let Some(lag) = maybe_lag {
            let fixed_block_number: BlockNumber = self
                .provider
                .get_block_number()
                .await
                .map_err(ChainCommunicationError::from_other)?
                .saturating_sub(lag.get().into())
                .into();
            call = call.block(fixed_block_number);
        };

        Ok(call.call().await?.into())
    }

    #[instrument(skip(self))]
    async fn count(&self, maybe_lag: Option<NonZeroU64>) -> ChainResult<u32> {
        let mut call = self.contract.count();
        if let Some(lag) = maybe_lag {
            let fixed_block_number: BlockNumber = self
                .provider
                .get_block_number()
                .await
                .map_err(ChainCommunicationError::from_other)?
                .saturating_sub(lag.get().into())
                .into();
            call = call.block(fixed_block_number);
        };
        let count = call.call().await?;
        Ok(count)
    }
}
