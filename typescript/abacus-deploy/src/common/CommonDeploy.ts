import path from 'path';
import fs from 'fs';
import { ethers } from 'ethers';
import { types } from '@abacus-network/utils';
import { Deploy } from '@abacus-network/abacus-deploy';
import { CommonInstance } from './CommonInstance';

export abstract class CommonDeploy<
  T extends CommonInstance<any>,
  V,
> extends Deploy<T, V> {
  writeContracts(directory: string) {
    for (const domain of this.domains) {
      this.instances[domain].contracts.writeJson(
        path.join(directory, `${this.chains[domain].name}_contracts.json`),
      );
    }
  }

  async ready(): Promise<void> {
    await Promise.all(
      this.domains.map(
        (d) =>
          (this.chains[d].signer.provider! as ethers.providers.JsonRpcProvider)
            .ready,
      ),
    );
  }

  async transferOwnership(owners: Record<types.Domain, types.Address>) {
    await Promise.all(
      this.domains.map((d) => this.instances[d].transferOwnership(owners[d])),
    );
  }

  writeVerificationInput(directory: string) {
    for (const domain of this.domains) {
      const verificationInput = this.instances[domain].verificationInput;
      fs.mkdirSync(directory, { recursive: true });
      const filepath = path.join(
        directory,
        `${this.chains[domain].name}_verification.json`,
      );
      const contents = JSON.stringify(verificationInput, null, 2);
      fs.writeFileSync(filepath, contents);
    }
  }
}
