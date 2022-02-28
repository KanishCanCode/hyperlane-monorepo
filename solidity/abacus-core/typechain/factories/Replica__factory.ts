/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Replica, ReplicaInterface } from "../Replica";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_localDomain",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "_processGas",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_reserveGas",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "oldRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32[2]",
        name: "newRoot",
        type: "bytes32[2]",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature2",
        type: "bytes",
      },
    ],
    name: "DoubleUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "updater",
        type: "address",
      },
    ],
    name: "NewUpdater",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "messageHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        indexed: true,
        internalType: "bytes",
        name: "returnData",
        type: "bytes",
      },
    ],
    name: "Process",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "homeDomain",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "oldRoot",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "Update",
    type: "event",
  },
  {
    inputs: [],
    name: "PROCESS_GAS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "RESERVE_GAS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "VERSION",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_root",
        type: "bytes32",
      },
    ],
    name: "acceptableRoot",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "committedRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "confirmAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_oldRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32[2]",
        name: "_newRoot",
        type: "bytes32[2]",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_signature2",
        type: "bytes",
      },
    ],
    name: "doubleUpdate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "homeDomainHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_remoteDomain",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_updater",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_committedRoot",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_optimisticSeconds",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "localDomain",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "messages",
    outputs: [
      {
        internalType: "enum Replica.MessageStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "optimisticSeconds",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
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
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
    ],
    name: "process",
    outputs: [
      {
        internalType: "bool",
        name: "_success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_leaf",
        type: "bytes32",
      },
      {
        internalType: "bytes32[32]",
        name: "_proof",
        type: "bytes32[32]",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "prove",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
      {
        internalType: "bytes32[32]",
        name: "_proof",
        type: "bytes32[32]",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "proveAndProcess",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "remoteDomain",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_updater",
        type: "address",
      },
    ],
    name: "setUpdater",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "state",
    outputs: [
      {
        internalType: "enum Common.States",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_oldRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_newRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "update",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updater",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60e06040523480156200001157600080fd5b5060405162003040380380620030408339810160408190526200003491620000d9565b63ffffffff8316608052620cf850821015620000865760405162461bcd60e51b815260206004820152600c60248201526b2170726f636573732067617360a01b60448201526064015b60405180910390fd5b613a98811015620000c95760405162461bcd60e51b815260206004820152600c60248201526b21726573657276652067617360a01b60448201526064016200007d565b60a09190915260c052506200011b565b600080600060608486031215620000ef57600080fd5b835163ffffffff811681146200010457600080fd5b602085015160409095015190969495509392505050565b60805160a05160c051612ed962000167600039600081816101a101526109da015260008181610379015281816109fb0152610ad101526000818161027b01526107b00152612ed96000f3fe608060405234801561001057600080fd5b50600436106101825760003560e01c8063928bc4b2116100d8578063c19d93fb1161008c578063e7e7a7b711610066578063e7e7a7b7146103c1578063f2fde38b146103d4578063ffa1ad74146103e757600080fd5b8063c19d93fb1461034d578063d88beda214610374578063df034cd01461039b57600080fd5b80639d54f419116100bd5780639d54f41914610314578063a3f81d6814610327578063b31c01fb1461033a57600080fd5b8063928bc4b2146102f1578063961681dc1461030457600080fd5b806345630b1a1161013a57806371bfb7b81161011457806371bfb7b8146102565780638d3638f4146102765780638da5cb5b146102b257600080fd5b806345630b1a146102325780636188af0e1461023a57806367a6771d1461024d57600080fd5b80632bbd59ca1161016b5780632bbd59ca146101d6578063371d307114610206578063399926681461022957600080fd5b806319d9d21a1461018757806325e3beda1461019c575b600080fd5b61019a610195366004612729565b610401565b005b6101c37f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020015b60405180910390f35b6101f96101e43660046127b8565b60356020526000908152604090205460ff1681565b6040516101cd9190612837565b61021961021436600461285c565b6105d8565b60405190151581526020016101cd565b6101c360325481565b6101c36106f9565b61019a61024836600461296e565b610713565b6101c360015481565b6101c36102643660046127b8565b60346020526000908152604090205481565b61029d7f000000000000000000000000000000000000000000000000000000000000000081565b60405163ffffffff90911681526020016101cd565b60365473ffffffffffffffffffffffffffffffffffffffff165b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101cd565b6102196102ff3660046129b7565b61079a565b60315461029d9063ffffffff1681565b61019a610322366004612a15565b610cdf565b6102196103353660046127b8565b610de3565b61019a610348366004612a30565b610e09565b6000546101f990760100000000000000000000000000000000000000000000900460ff1681565b6101c37f000000000000000000000000000000000000000000000000000000000000000081565b6000546102cc9062010000900473ffffffffffffffffffffffffffffffffffffffff1681565b61019a6103cf366004612a80565b610ff2565b61019a6103e2366004612a15565b61119a565b6103ef600081565b60405160ff90911681526020016101cd565b6002600054760100000000000000000000000000000000000000000000900460ff166002811115610434576104346127d1565b14156104a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6661696c6564207374617465000000000000000000000000000000000000000060448201526064015b60405180910390fd5b604080516020601f86018190048102820181019092528481526104e3918891883591889088908190840183828082843760009201919091525061139d92505050565b8015610532575061053286866001602002013584848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061139d92505050565b801561054357508435602086013514155b156105d05761058e600080547fffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffffff16760200000000000000000000000000000000000000000000179055565b7f2c3f60bab4170347826231b75a920b5053941ddebc6eed6fd2c25721648b186f8686868686866040516105c796959493929190612b45565b60405180910390a15b505050505050565b60008060008581526035602052604090205460ff1660028111156105fe576105fe6127d1565b14610665576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f214d6573736167655374617475732e4e6f6e65000000000000000000000000006044820152606401610498565b600061069b8585602080602002604051908101604052809291908260208002808284376000920191909152508791506114309050565b90506106a681610de3565b156106ec575050600083815260356020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660019081179091556106f2565b60009150505b9392505050565b60315460009061070e9063ffffffff166114e2565b905090565b610725838051906020012083836105d8565b61078b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f2170726f766500000000000000000000000000000000000000000000000000006044820152606401610498565b6107948361079a565b50505050565b6000806107a7838261155b565b905063ffffffff7f0000000000000000000000000000000000000000000000000000000000000000166107fb7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316611581565b63ffffffff1614610868576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f2164657374696e6174696f6e00000000000000000000000000000000000000006044820152606401610498565b60006108957fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000083166115b2565b9050600160008281526035602052604090205460ff1660028111156108bc576108bc6127d1565b14610923576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f2170726f76656e000000000000000000000000000000000000000000000000006044820152606401610498565b60335460ff16600114610992576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f217265656e7472616e74000000000000000000000000000000000000000000006044820152606401610498565b603380547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00908116909155600082815260356020526040902080549091166002179055610a1f7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000612bb8565b5a1015610a8a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104989060208082526004908201527f2167617300000000000000000000000000000000000000000000000000000000604082015260600190565b6000610ab77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000841661160f565b6040805161010080825261012082019092529192506000917f0000000000000000000000000000000000000000000000000000000000000000908390836020820181803683370190505090506000610b307fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008916611620565b610b5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008a16611650565b610bb0610b897fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008c16611681565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000166116d0565b604051602401610bc293929190612c46565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f56d5d4750000000000000000000000000000000000000000000000000000000017815281519192506000918291828a88f198503d945083851115610c57578394505b848252846000602084013e81604051610c709190612c6b565b604051908190038120908a15159089907fd42de95a9b26f1be134c8ecce389dc4fcfa18753d01661b7b361233569e8fe4890600090a45050603380547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905550949695505050505050565b6000610d0060365473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480610d6d57506000610d5560365473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff16145b905080610dd6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f216f776e657200000000000000000000000000000000000000000000000000006044820152606401610498565b610ddf8261172a565b5050565b60008181526034602052604081205480610e005750600092915050565b42101592915050565b6002600054760100000000000000000000000000000000000000000000900460ff166002811115610e3c57610e3c6127d1565b1415610ea4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6661696c656420737461746500000000000000000000000000000000000000006044820152606401610498565b6001548314610f0f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f6e6f742063757272656e742075706461746500000000000000000000000000006044820152606401610498565b610f1a83838361139d565b610f80576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f21757064617465722073696700000000000000000000000000000000000000006044820152606401610498565b603254610f8d9042612bb8565b6000838152603460205260409081902091909155600183905560315490518391859163ffffffff909116907f608828ad904a0c9250c09004ba7226efb08f35a5c815bb3f76b5a8a271cd08b290610fe5908690612c87565b60405180910390a4505050565b600054610100900460ff1661100d5760005460ff1615611011565b303b155b61109d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610498565b600054610100900460ff161580156110dc57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000166101011790555b6110e5846117ab565b6033805460017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff009091168117909155603180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000001663ffffffff881617905583815560008481526034602052604090205560328290556111643361119a565b801561119357600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b5050505050565b60006111bb60365473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806112285750600061121060365473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff16145b905080611291576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f216f776e657200000000000000000000000000000000000000000000000000006044820152606401610498565b73ffffffffffffffffffffffffffffffffffffffff821661130e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f216e65774f776e657200000000000000000000000000000000000000000000006044820152606401610498565b60365460405173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350603680547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6000806113a86106f9565b6040805160208101929092528101869052606081018590526080016040516020818303038152906040528051906020012090506113e481611947565b60005490915062010000900473ffffffffffffffffffffffffffffffffffffffff166114108285611982565b73ffffffffffffffffffffffffffffffffffffffff161495945050505050565b8260005b60208110156114da57600183821c16600085836020811061145757611457612acd565b6020020151905081600114156114985760408051602081018390529081018590526060016040516020818303038152906040528051906020012093506114c5565b60408051602081018690529081018290526060016040516020818303038152906040528051906020012093505b505080806114d290612c9a565b915050611434565b509392505050565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e083901b1660208201527f4f505449435300000000000000000000000000000000000000000000000000006024820152600090602a015b604051602081830303815290604052805190602001209050919050565b81516000906020840161157664ffffffffff8516828461199e565b925050505b92915050565b600061157b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000831660286004611a01565b6000806115cd8360781c6bffffffffffffffffffffffff1690565b6bffffffffffffffffffffffff16905060006115f78460181c6bffffffffffffffffffffffff1690565b6bffffffffffffffffffffffff169091209392505050565b600061157b61161d83611a31565b90565b600061157b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316826004611a01565b600061157b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000831660046020611a5e565b600061157b604c6116a481601886901c6bffffffffffffffffffffffff16612cd3565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000851691906000611c58565b60606000806116ed8460181c6bffffffffffffffffffffffff1690565b60405193508392506bffffffffffffffffffffffff16905061171984611714846020612bb8565b611cf9565b508181016020016040529052919050565b600080547fffffffffffffffffffff0000000000000000000000000000000000000000ffff166201000073ffffffffffffffffffffffffffffffffffffffff8416908102919091179091556040519081527f9e5f57e4ee5f9eeac3131028d48f19d80820ce6fa93c4c66cc82a3e2b9837c329060200160405180910390a150565b600054610100900460ff166117c65760005460ff16156117ca565b303b155b611856576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610498565b600054610100900460ff1615801561189557600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000166101011790555b600080547fffffffffffffffffff000000000000000000000000000000000000000000ffff166201000073ffffffffffffffffffffffffffffffffffffffff8516027fffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffffff16177601000000000000000000000000000000000000000000001790558015610ddf57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555050565b6040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c0161153e565b60008060006119918585611eef565b915091506114da81611f5f565b6000806119ab84846121bb565b90506040518111156119bb575060005b806119e9577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000009150506106f2565b606085811b8517901b831760181b5b95945050505050565b6000611a0e826020612cea565b611a19906008612d0d565b60ff16611a27858585611a5e565b901c949350505050565b600061157b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316602c60205b600060ff8216611a70575060006106f2565b611a888460181c6bffffffffffffffffffffffff1690565b6bffffffffffffffffffffffff16611aa38460ff85166121bb565b1115611b3557611b02611ac48560781c6bffffffffffffffffffffffff1690565b6bffffffffffffffffffffffff16611aea8660181c6bffffffffffffffffffffffff1690565b6bffffffffffffffffffffffff16858560ff16612233565b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104989190612c87565b60208260ff161115611bc9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603a60248201527f54797065644d656d566965772f696e646578202d20417474656d70746564207460448201527f6f20696e646578206d6f7265207468616e2033322062797465730000000000006064820152608401610498565b6000611bd6836008612d0d565b90506000611bf28660781c6bffffffffffffffffffffffff1690565b6bffffffffffffffffffffffff16905060007f80000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff84011d91909501511695945050505050565b600080611c738660781c6bffffffffffffffffffffffff1690565b6bffffffffffffffffffffffff169050611c8c866122a1565b611ca085611c9a84896121bb565b906121bb565b1115611ccf577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000915050611cf1565b611cd981866121bb565b9050611ced8364ffffffffff16828661199e565b9150505b949350505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008084161415611dad576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f54797065644d656d566965772f636f7079546f202d204e756c6c20706f696e7460448201527f65722064657265660000000000000000000000000000000000000000000000006064820152608401610498565b611db6836122f1565b611e42576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f54797065644d656d566965772f636f7079546f202d20496e76616c696420706f60448201527f696e7465722064657265660000000000000000000000000000000000000000006064820152608401610498565b6000611e5c8460181c6bffffffffffffffffffffffff1690565b6bffffffffffffffffffffffff1690506000611e868560781c6bffffffffffffffffffffffff1690565b6bffffffffffffffffffffffff1690506000604051905084811115611eab5760206060fd5b8285848460045afa50611ee5611ec18760d81c90565b70ffffffffff000000000000000000000000606091821b168717901b841760181b90565b9695505050505050565b600080825160411415611f265760208301516040840151606085015160001a611f1a8782858561232f565b94509450505050611f58565b825160401415611f505760208301516040840151611f45868383612447565b935093505050611f58565b506000905060025b9250929050565b6000816004811115611f7357611f736127d1565b1415611f7c5750565b6001816004811115611f9057611f906127d1565b1415611ff8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610498565b600281600481111561200c5761200c6127d1565b1415612074576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610498565b6003816004811115612088576120886127d1565b1415612116576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f75650000000000000000000000000000000000000000000000000000000000006064820152608401610498565b600481600481111561212a5761212a6127d1565b14156121b8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c60448201527f75650000000000000000000000000000000000000000000000000000000000006064820152608401610498565b50565b60006121c78284612bb8565b90508281101561157b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4f766572666c6f7720647572696e67206164646974696f6e2e000000000000006044820152606401610498565b6060600061224086612499565b915050600061224e86612499565b915050600061225c86612499565b915050600061226a86612499565b915050838383836040516020016122849493929190612d36565b604051602081830303815290604052945050505050949350505050565b60006122bb8260181c6bffffffffffffffffffffffff1690565b6122d38360781c6bffffffffffffffffffffffff1690565b6122dd9190612e73565b6bffffffffffffffffffffffff1692915050565b60006122fd8260d81c90565b64ffffffffff1664ffffffffff141561231857506000919050565b6000612323836122a1565b60405110199392505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115612366575060009050600361243e565b8460ff16601b1415801561237e57508460ff16601c14155b1561238f575060009050600461243e565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa1580156123e3573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff81166124375760006001925092505061243e565b9150600090505b94509492505050565b6000807f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83168161247d60ff86901c601b612bb8565b905061248b8782888561232f565b935093505050935093915050565b600080601f5b600f8160ff1611156124f75760006124b8826008612d0d565b60ff1685901c90506124c981612559565b61ffff16841793508160ff166010146124e457601084901b93505b506124f0600182612cea565b905061249f565b50600f5b60ff8160ff161015612553576000612514826008612d0d565b60ff1685901c905061252581612559565b61ffff16831792508160ff1660001461254057601083901b92505b5061254c600182612cea565b90506124fb565b50915091565b600061256b60048360ff16901c61258b565b60ff1661ffff919091161760081b6125828261258b565b60ff1617919050565b600060f08083179060ff821614156125a65750603092915050565b8060ff1660f114156125bb5750603192915050565b8060ff1660f214156125d05750603292915050565b8060ff1660f314156125e55750603392915050565b8060ff1660f414156125fa5750603492915050565b8060ff1660f5141561260f5750603592915050565b8060ff1660f614156126245750603692915050565b8060ff1660f714156126395750603792915050565b8060ff1660f8141561264e5750603892915050565b8060ff1660f914156126635750603992915050565b8060ff1660fa14156126785750606192915050565b8060ff1660fb141561268d5750606292915050565b8060ff1660fc14156126a25750606392915050565b8060ff1660fd14156126b75750606492915050565b8060ff1660fe14156126cc5750606592915050565b8060ff1660ff14156126e15750606692915050565b50919050565b60008083601f8401126126f957600080fd5b50813567ffffffffffffffff81111561271157600080fd5b602083019150836020828501011115611f5857600080fd5b60008060008060008060a0878903121561274257600080fd5b86359550606087018881111561275757600080fd5b6020880195503567ffffffffffffffff8082111561277457600080fd5b6127808a838b016126e7565b9096509450608089013591508082111561279957600080fd5b506127a689828a016126e7565b979a9699509497509295939492505050565b6000602082840312156127ca57600080fd5b5035919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600381106121b8577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6020810161284483612800565b91905290565b80610400810183101561157b57600080fd5b6000806000610440848603121561287257600080fd5b83359250612883856020860161284a565b915061042084013590509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f8301126128d457600080fd5b813567ffffffffffffffff808211156128ef576128ef612894565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561293557612935612894565b8160405283815286602085880101111561294e57600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000806000610440848603121561298457600080fd5b833567ffffffffffffffff81111561299b57600080fd5b6129a7868287016128c3565b935050612883856020860161284a565b6000602082840312156129c957600080fd5b813567ffffffffffffffff8111156129e057600080fd5b611cf1848285016128c3565b803573ffffffffffffffffffffffffffffffffffffffff81168114612a1057600080fd5b919050565b600060208284031215612a2757600080fd5b6106f2826129ec565b600080600060608486031215612a4557600080fd5b8335925060208401359150604084013567ffffffffffffffff811115612a6a57600080fd5b612a76868287016128c3565b9150509250925092565b60008060008060808587031215612a9657600080fd5b843563ffffffff81168114612aaa57600080fd5b9350612ab8602086016129ec565b93969395505050506040820135916060013590565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b868152604086602083013760a060608201819052600090612b699083018688612afc565b8281036080840152612b7c818587612afc565b9998505050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008219821115612bcb57612bcb612b89565b500190565b60005b83811015612beb578181015183820152602001612bd3565b838111156107945750506000910152565b60008151808452612c14816020860160208601612bd0565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b63ffffffff841681528260208201526060604082015260006119f86060830184612bfc565b60008251612c7d818460208701612bd0565b9190910192915050565b6020815260006106f26020830184612bfc565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612ccc57612ccc612b89565b5060010190565b600082821015612ce557612ce5612b89565b500390565b600060ff821660ff841680821015612d0457612d04612b89565b90039392505050565b600060ff821660ff84168160ff0481118215151615612d2e57612d2e612b89565b029392505050565b7f54797065644d656d566965772f696e646578202d204f76657272616e2074686581527f20766965772e20536c696365206973206174203078000000000000000000000060208201527fffffffffffff000000000000000000000000000000000000000000000000000060d086811b821660358401527f2077697468206c656e6774682030780000000000000000000000000000000000603b840181905286821b8316604a8501527f2e20417474656d7074656420746f20696e646578206174206f6666736574203060508501527f7800000000000000000000000000000000000000000000000000000000000000607085015285821b83166071850152607784015283901b1660868201527f2e00000000000000000000000000000000000000000000000000000000000000608c8201526000608d8201611ee5565b60006bffffffffffffffffffffffff808316818516808303821115612e9a57612e9a612b89565b0194935050505056fea2646970667358221220fc69e14780f1edf7e6cb7ef04d50f48dfddcaf040195e42bf1c1d3b880feddc164736f6c63430008090033";

export class Replica__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _localDomain: BigNumberish,
    _processGas: BigNumberish,
    _reserveGas: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Replica> {
    return super.deploy(
      _localDomain,
      _processGas,
      _reserveGas,
      overrides || {}
    ) as Promise<Replica>;
  }
  getDeployTransaction(
    _localDomain: BigNumberish,
    _processGas: BigNumberish,
    _reserveGas: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _localDomain,
      _processGas,
      _reserveGas,
      overrides || {}
    );
  }
  attach(address: string): Replica {
    return super.attach(address) as Replica;
  }
  connect(signer: Signer): Replica__factory {
    return super.connect(signer) as Replica__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReplicaInterface {
    return new utils.Interface(_abi) as ReplicaInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Replica {
    return new Contract(address, _abi, signerOrProvider) as Replica;
  }
}
