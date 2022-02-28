/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BadRecipient4, BadRecipient4Interface } from "../BadRecipient4";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "handle",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506101ab806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806356d5d47514610030575b600080fd5b61004361003e366004610081565b610045565b005b62abcdef60005260206000f35b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008060006060848603121561009657600080fd5b833563ffffffff811681146100aa57600080fd5b925060208401359150604084013567ffffffffffffffff808211156100ce57600080fd5b818601915086601f8301126100e257600080fd5b8135818111156100f4576100f4610052565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190838211818310171561013a5761013a610052565b8160405282815289602084870101111561015357600080fd5b826020860160208301376000602084830101528095505050505050925092509256fea2646970667358221220113158b807b4385cc5d6461224b30fb87a1da6dacc6c287b13e3ac72e442372364736f6c63430008090033";

export class BadRecipient4__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BadRecipient4> {
    return super.deploy(overrides || {}) as Promise<BadRecipient4>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BadRecipient4 {
    return super.attach(address) as BadRecipient4;
  }
  connect(signer: Signer): BadRecipient4__factory {
    return super.connect(signer) as BadRecipient4__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BadRecipient4Interface {
    return new utils.Interface(_abi) as BadRecipient4Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BadRecipient4 {
    return new Contract(address, _abi, signerOrProvider) as BadRecipient4;
  }
}
