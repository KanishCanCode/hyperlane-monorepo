/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ETHHelper, ETHHelperInterface } from "../ETHHelper";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_weth",
        type: "address",
      },
      {
        internalType: "address",
        name: "_bridge",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "bridge",
    outputs: [
      {
        internalType: "contract BridgeRouter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
    ],
    name: "send",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_to",
        type: "bytes32",
      },
    ],
    name: "sendTo",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "sendToEVMLike",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "weth",
    outputs: [
      {
        internalType: "contract IWeth",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b506040516104d43803806104d483398101604081905261002f916100c2565b6001600160a01b03828116608081905290821660a081905260405163095ea7b360e01b81526004810191909152600019602482015263095ea7b390604401600060405180830381600087803b15801561008757600080fd5b505af115801561009b573d6000803e3d6000fd5b5050505050506100f5565b80516001600160a01b03811681146100bd57600080fd5b919050565b600080604083850312156100d557600080fd5b6100de836100a6565b91506100ec602084016100a6565b90509250929050565b60805160a0516103a761012d6000396000818160f6015261022701526000818160990152818161012d01526101e601526103a76000f3fe60806040526004361061005a5760003560e01c80633fc8cef3116100435780633fc8cef314610087578063e78cea92146100e4578063ec93e5f01461011857600080fd5b806303c1d2831461005f5780632e96d5a314610074575b600080fd5b61007261006d3660046102d5565b61012b565b005b6100726100823660046102ff565b61028b565b34801561009357600080fd5b506100bb7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b3480156100f057600080fd5b506100bb7f000000000000000000000000000000000000000000000000000000000000000081565b610072610126366004610321565b610298565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0346040518263ffffffff1660e01b81526004016000604051808303818588803b15801561019357600080fd5b505af11580156101a7573d6000803e3d6000fd5b50506040517f1cabf08f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000008116600483015234602483015263ffffffff87166044830152606482018690527f0000000000000000000000000000000000000000000000000000000000000000169350631cabf08f92506084019050600060405180830381600087803b15801561026f57600080fd5b505af1158015610283573d6000803e3d6000fd5b505050505050565b610295813361012b565b50565b6102b88273ffffffffffffffffffffffffffffffffffffffff831661012b565b5050565b803563ffffffff811681146102d057600080fd5b919050565b600080604083850312156102e857600080fd5b6102f1836102bc565b946020939093013593505050565b60006020828403121561031157600080fd5b61031a826102bc565b9392505050565b6000806040838503121561033457600080fd5b61033d836102bc565b9150602083013573ffffffffffffffffffffffffffffffffffffffff8116811461036657600080fd5b80915050925092905056fea2646970667358221220040edc49f67509b15ec4043cc4fc11ce7a11ccdb45e9aa24f027326cec47173c64736f6c63430008090033";

export class ETHHelper__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _weth: string,
    _bridge: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ETHHelper> {
    return super.deploy(_weth, _bridge, overrides || {}) as Promise<ETHHelper>;
  }
  getDeployTransaction(
    _weth: string,
    _bridge: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_weth, _bridge, overrides || {});
  }
  attach(address: string): ETHHelper {
    return super.attach(address) as ETHHelper;
  }
  connect(signer: Signer): ETHHelper__factory {
    return super.connect(signer) as ETHHelper__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ETHHelperInterface {
    return new utils.Interface(_abi) as ETHHelperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ETHHelper {
    return new Contract(address, _abi, signerOrProvider) as ETHHelper;
  }
}
