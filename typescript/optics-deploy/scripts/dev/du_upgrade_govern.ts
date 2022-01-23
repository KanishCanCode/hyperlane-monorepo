import { devCommunity } from 'optics-multi-provider-community';
import * as alfajores from '../../config/testnets/alfajores';
import * as gorli from '../../config/testnets/gorli';
import * as kovan from '../../config/testnets/kovan';
import * as mumbai from '../../config/testnets/mumbai';
import * as fuji from '../../config/testnets/fuji';
import { checkCoreDeploys, InvariantViolationCollector } from '../../src/checks';
import { configPath } from './agentConfig';
import { makeAllConfigs } from '../../src/config';

async function main() {
  devCommunity.registerRpcProvider('alfajores', process.env.ALFAJORES_RPC!)
  devCommunity.registerRpcProvider('gorli', process.env.GORLI_RPC!)
  devCommunity.registerRpcProvider('kovan', process.env.KOVAN_RPC!)
  devCommunity.registerRpcProvider('mumbai', process.env.MUMBAI_RPC!)
  devCommunity.registerRpcProvider('fuji', process.env.FUJI_RPC!)
  const governorCore = await devCommunity.governorCore()
  console.log('govcore', governorCore)
  const governorDomain = await devCommunity.governorDomain()
  const governanceMessages = await governorCore.newGovernanceBatch()

  const invariantViolationCollector = new InvariantViolationCollector()
  await checkCoreDeploys(
    configPath,
    await Promise.all([
      makeAllConfigs(alfajores, (_) => _.devConfig),
      makeAllConfigs(kovan, (_) => _.devConfig),
      makeAllConfigs(gorli, (_) => _.devConfig),
      makeAllConfigs(fuji, (_) => _.devConfig),
      makeAllConfigs(mumbai, (_) => _.devConfig),
    ]),
    governorDomain,
    invariantViolationCollector.handleViolation
  );

  if (invariantViolationCollector.violations.length === 0) {
    console.info("No violations, exit")
    return
  }

  for (const violation of invariantViolationCollector.violations) {
    const call = await violation.upgradeBeaconController.populateTransaction.upgrade(violation.beacon.address, violation.expectedImplementationAddress)
    if (violation.domain === governorDomain) {
      governanceMessages.pushLocal(call)
    } else {
      governanceMessages.pushRemote(violation.domain, call)
    }
  }
  await governanceMessages.build()
  governanceMessages.write('../../rust/config/dev/')
}
main().then(console.log).catch(console.error)
