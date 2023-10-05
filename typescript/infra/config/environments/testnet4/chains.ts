import { ChainMap, ChainMetadata, chainMetadata } from '@hyperlane-xyz/sdk';

import { AgentChainNames, Role } from '../../../src/roles';

export const testnetConfigs: ChainMap<ChainMetadata> = {
  alfajores: chainMetadata.alfajores,
  basegoerli: chainMetadata.basegoerli,
  fuji: chainMetadata.fuji,
  chiado: chainMetadata.chiado,
  lineagoerli: chainMetadata.lineagoerli,
  mumbai: {
    ...chainMetadata.mumbai,
    transactionOverrides: {
      maxFeePerGas: 70 * 10 ** 9, // 70 gwei
      maxPriorityFeePerGas: 40 * 10 ** 9, // 40 gwei
    },
  },
  bsctestnet: chainMetadata.bsctestnet,
  goerli: chainMetadata.goerli,
  scrollsepolia: chainMetadata.scrollsepolia,
  sepolia: chainMetadata.sepolia,
  moonbasealpha: chainMetadata.moonbasealpha,
  optimismgoerli: chainMetadata.optimismgoerli,
  arbitrumgoerli: chainMetadata.arbitrumgoerli,
  polygonzkevmtestnet: chainMetadata.polygonzkevmtestnet,
};

// "Blessed" chains that we want core contracts for.
export type TestnetChains = keyof typeof testnetConfigs;
export const supportedChainNames = Object.keys(
  testnetConfigs,
) as TestnetChains[];
export const environment = 'testnet4';

const validatorChainNames = [
  ...supportedChainNames,
  chainMetadata.solanadevnet.name,
  chainMetadata.proteustestnet.name,
];

const relayerChainNames = validatorChainNames;

export const agentChainNames: AgentChainNames = {
  [Role.Validator]: validatorChainNames,
  [Role.Relayer]: relayerChainNames,
  [Role.Scraper]: supportedChainNames,
};