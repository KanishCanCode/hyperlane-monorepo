/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestMerkle, TestMerkleInterface } from "../TestMerkle";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
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
    name: "branchRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "_node",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "count",
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
        name: "_node",
        type: "bytes32",
      },
    ],
    name: "insert",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "root",
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
    inputs: [],
    name: "tree",
    outputs: [
      {
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610bd0806100206000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c806377d63d1d1161005057806377d63d1d14610097578063ebf0c717146100aa578063fd54b228146100b257600080fd5b806306661abd1461006c5780632d287e4314610082575b600080fd5b6020545b60405190815260200160405180910390f35b6100956100903660046108e0565b6100bc565b005b6100706100a53660046108f9565b6100ca565b610070610108565b6020546100709081565b6100c7600082610119565b50565b60006101008484602080602002604051908101604052809291908260208002808284376000920191909152508691506102629050565b949350505050565b60006101146000610314565b905090565b600161012760206002610a86565b6101319190610a99565b8260200154106101a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f6d65726b6c6520747265652066756c6c00000000000000000000000000000000604482015260640160405180910390fd5b60018260200160008282546101b69190610ab0565b9091555050602082015460005b60208110156102545781600116600114156101f357828482602081106101eb576101eb610ac8565b015550505050565b83816020811061020557610205610ac8565b015460408051602081019290925281018490526060016040516020818303038152906040528051906020012092506002826102409190610af7565b91508061024c81610b32565b9150506101c3565b5061025d610b6b565b505050565b8260005b602081101561030c57600183821c16600085836020811061028957610289610ac8565b6020020151905081600114156102ca5760408051602081018390529081018590526060016040516020818303038152906040528051906020012093506102f7565b60408051602081018690529081018290526060016040516020818303038152906040528051906020012093505b5050808061030490610b32565b915050610266565b509392505050565b60006103278261032261032d565b6107ee565b92915050565b6103356108c1565b600081527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb560208201527fb4c11951957c6f8f642c4af61cd6b24640fec6dc7fc607ee8206a99e92410d3060408201527f21ddb9a356815c3fac1026b6dec5df3124afbadb485c9ba5a3e3398a04b7ba8560608201527fe58769b32a1beaf1ea27375a44095a0d1fb664ce2dd358e7fcbfb78c26a1934460808201527f0eb01ebfc9ed27500cd4dfc979272d1f0913cc9f66540d7e8005811109e1cf2d60a08201527f887c22bd8750d34016ac3c66b5ff102dacdd73f6b014e710b51e8022af9a196860c08201527fffd70157e48063fc33c97a050f7f640233bf646cc98d9524c6b92bcf3ab56f8360e08201527f9867cc5f7f196b93bae1e27e6320742445d290f2263827498b54fec539f756af6101008201527fcefad4e508c098b9a7e1d8feb19955fb02ba9675585078710969d3440f5054e06101208201527ff9dc3e7fe016e050eff260334f18a5d4fe391d82092319f5964f2e2eb7c1c3a56101408201527ff8b13a49e282f609c317a833fb8d976d11517c571d1221a265d25af778ecf8926101608201527f3490c6ceeb450aecdc82e28293031d10c7d73bf85e57bf041a97360aa2c5d99c6101808201527fc1df82d9c4b87413eae2ef048f94b4d3554cea73d92b0f7af96e0271c691e2bb6101a08201527f5c67add7c6caf302256adedf7ab114da0acfe870d449a3a489f781d659e8becc6101c08201527fda7bce9f4e8618b6bd2f4132ce798cdc7a60e7e1460a7299e3c6342a579626d26101e08201527f2733e50f526ec2fa19a22b31e8ed50f23cd1fdf94c9154ed3a7609a2f1ff981f6102008201527fe1d3b5c807b281e4683cc6d6315cf95b9ade8641defcb32372f1c126e398ef7a6102208201527f5a2dce0a8a7f68bb74560f8f71837c2c2ebbcbf7fffb42ae1896f13f7c7479a06102408201527fb46a28b6f55540f89444f63de0378e3d121be09e06cc9ded1c20e65876d36aa06102608201527fc65e9645644786b620e2dd2ad648ddfcbf4a7e5b1a3a4ecfe7f64667a3f0b7e26102808201527ff4418588ed35a2458cffeb39b93d26f18d2ab13bdce6aee58e7b99359ec2dfd96102a08201527f5a9c16dc00d6ef18b7933a6f8dc65ccb55667138776f7dea101070dc8796e3776102c08201527f4df84f40ae0c8229d0d6069e5c8f39a7c299677a09d367fc7b05e3bc380ee6526102e08201527fcdc72595f74c7b1043d0e1ffbab734648c838dfb0527d971b602bc216c9619ef6103008201527f0abf5ac974a1ed57f4050aa510dd9c74f508277b39d7973bb2dfccc5eeb0618d6103208201527fb8cd74046ff337f0a7bf2c8e03e10f642c1886798d71806ab1e888d9e5ee87d06103408201527f838c5655cb21c6cb83313b5a631175dff4963772cce9108188b34ac87c81c41e6103608201527f662ee4dd2dd7b2bc707961b1e646c4047669dcb6584f0d8d770daf5d7e7deb2e6103808201527f388ab20e2573d171a88108e79d820e98f26c0b84aa8b2f4aa4968dbb818ea3226103a08201527f93237c50ba75ee485f4c22adf2f741400bdf8d6a9cc7df7ecae576221665d7356103c08201527f8448818bb4ae4562849e949e17ac16e0be16688e156b5cf15e098c627c0056a96103e082015290565b6020820154600090815b60208110156108b957600182821c16600086836020811061081b5761081b610ac8565b0154905081600114156108595760408051602081018390529081018690526060016040516020818303038152906040528051906020012094506108a4565b8486846020811061086c5761086c610ac8565b602002015160405160200161088b929190918252602082015260400190565b6040516020818303038152906040528051906020012094505b505080806108b190610b32565b9150506107f8565b505092915050565b6040518061040001604052806020906020820280368337509192915050565b6000602082840312156108f257600080fd5b5035919050565b6000806000610440848603121561090f57600080fd5b8335925061042084018581111561092557600080fd5b60208501925080359150509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600181815b808511156109bf57817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048211156109a5576109a5610937565b808516156109b257918102915b93841c939080029061096b565b509250929050565b6000826109d657506001610327565b816109e357506000610327565b81600181146109f95760028114610a0357610a1f565b6001915050610327565b60ff841115610a1457610a14610937565b50506001821b610327565b5060208310610133831016604e8410600b8410161715610a42575081810a610327565b610a4c8383610966565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115610a7e57610a7e610937565b029392505050565b6000610a9283836109c7565b9392505050565b600082821015610aab57610aab610937565b500390565b60008219821115610ac357610ac3610937565b500190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082610b2d577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610b6457610b64610937565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fdfea26469706673582212205730c6b0322d56611dd18aee4bc33e180dd5e7dcdd78bce085708dde581c932964736f6c63430008090033";

export class TestMerkle__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestMerkle> {
    return super.deploy(overrides || {}) as Promise<TestMerkle>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestMerkle {
    return super.attach(address) as TestMerkle;
  }
  connect(signer: Signer): TestMerkle__factory {
    return super.connect(signer) as TestMerkle__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestMerkleInterface {
    return new utils.Interface(_abi) as TestMerkleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestMerkle {
    return new Contract(address, _abi, signerOrProvider) as TestMerkle;
  }
}
