---
id: software-stack
---

# Incognito Software Stack 

It could be a little overwhelming to read the Incognito source code. There are more than 1 million lines of code in the [Incognito codebase](https://github.com/incognitochain). This topic provides an overview of the Incognito architecture and a guide to navigating the Incognito source code.

## Network Architecture

The Incognito software stack is designed in five layers.

1. The **P2P Networking layer** implements on top of libp2p [Benet and Dias, 2019] to handle peer-to-peer communications such as finding peers, connecting to them, sending and receiving transactions, blocks, and messages.

2. The **Blockchain layer**, or the Data layer, implements data storage for shards and beacon and data synchronization among nodes.

3. The **Core layer** implements the consensus mechanism, privacy, and bridges to other cryptonetworks.

4. The **Developer Tools layer** provides a few different options for developers to work with Incognito, including an SDK, RPC, and Websocket.

5. The **Application layer** ships a reference mobile wallet, some reference privacy apps, and a reference hardware full node.

We also built several infrastructure tools to support network monitoring, visualization, and deployment.

![](https://we.incognito.org/uploads/default/original/1X/e6b7dc9937de229953b1c9056896e8c1641da36d.png) 

*Figure 1. The layered Incognito architecture.*


## Navigating the Incognito Source Code

We implemented Incognito in Go [Go, 2019] for a balance of portability, performance, and the development efficiency it brings to a large-scale, open-source project like Incognito.

* **P2P Networking**
  * **Peer Management**. Peer management handles peer-to-peer communications such as finding peers, connecting to them, sending and receiving transactions, blocks, and messages. Its code is in the [connmanager](https://github.com/incognitochain/incognito-chain/tree/master/connmanager) package and the [addrmanager](https://github.com/incognitochain/incognito-chain/tree/master/addrmanager) package.
  * **NetSync**. NetSync is a mediator that receives incoming messages, parses them, and routes the messages to the right components. Its code is in [netsync](https://github.com/incognitochain/incognito-chain/tree/master/netsync) package.
  * **Highway**. Highway is a new network topology design that speeds up P2P communications. It is under development under the [highway](https://github.com/incognitochain/incognito-chain/tree/highway) branch and will be merged into the master branch in November 2019.
* **Blockchain**
  * **Shards**. Shards are subchains. A subchain is a Proof-of-Stake blockchain with its own committee of N nodes. A shard's job is to produce new blocks via a Practical Byzantine Fault Tolerance (pBFT) consensus algorithm. Its code is in the [blockchain](https://github.com/incognitochain/incognito-chain/tree/master/blockchain) package.
  * **Beacon** . Beacon is also a subchain. A beacon's job is to coordinate the shards and maintain the global state of the network. Its code is in the [blockchain](https://github.com/incognitochain/incognito-chain/tree/master/blockchain) package.
  * **Synker**. Synker makes sure the node is up to date among its peers and also broadcasts the node status to its peers. Its code is in the [blockchain](https://github.com/incognitochain/incognito-chain/tree/master/blockchain) package.
  * **Mempool** . Mempool (memory pool) is a collection of transactions and blocks that have been verified but are not yet confirmed. Its code is in the [mempool](https://github.com/incognitochain/incognito-chain/tree/master/mempool) package.
  * **Wallet**. Software that holds all your Incognito keys. Use it to send and receive your Incognito tokens. Its code is in the [wallet](https://github.com/incognitochain/incognito-chain/tree/master/wallet) package.
  * **Database** . Incognito uses LevelDB to store block data. Its code is in the [database](https://github.com/incognitochain/incognito-chain/tree/master/database) package.
* **Core**
  * **Consensus**
    * **pBFT** . For consensus algorithm, Incognito implements pBFT (Practical Byzantine Fault Tolerance). Its code is in the [blsbft](https://github.com/incognitochain/incognito-chain/tree/master/consensus/blsbft) package.
    * **BLS** . For multi-signature agregation, Incognito implements BLS Multi-Signatures. Its code is in the [blsmultisig](https://github.com/incognitochain/incognito-chain/tree/master/consensus/signatureschemes/blsmultisig) package.
    * **RNG** . For random number generator, Incognito currently uses Bitcoin block hash. We'll explore other RNG solutions in the future. Its code is in the [btc](https://github.com/incognitochain/incognito-chain/tree/master/blockchain/btc) package.
  * **Privacy**
    * **RingCT**. For privacy, Incognito implements RingCT (Ring Confidential Transaction) with ring signatures, stealth addresses, and confidential transactions. Its code is in the [privacy](https://github.com/incognitochain/incognito-chain/tree/master/privacy) package.
    * **Confidential Asset** . RingCT hides the amount of the transaction, but it doesn't hide the type of asset being sent. Confidential Asset solves that. It's under development under the [new-privacy-dev](https://github.com/incognitochain/incognito-chain/tree/new-privacy-dev) branch and will be merged into the master branch in December 2019.
    * **Mobile ZKP**. Incognito implements Zero-Knowledge Proofs (ZKP) Generation on mobile. Private transactions can be sent on any regular phone under 15 seconds. Its code is in the [wasm](https://github.com/incognitochain/incognito-chain/tree/master/privacy/wasm) package and the [zeroknowledge](https://github.com/incognitochain/incognito-chain/tree/master/privacy/zeroknowledge) package.
  * **Bridges**
    * **Ethereum**. Incognito implements a trustless two-way bridge between Incognito and Ethereum to let anyone send and receive ETH & ERC20 privately. Its code is in the [bridge-eth](https://github.com/incognitochain/bridge-eth) repository.
    * **Bitcoin**. Incognito is working on a trustless two-way bridge between Incognito and Bitcoin to let anyone send and receive BTC privately. Estimated ship date: Dec 2019.
    * **Cosmos** . Incognito is exploring Cosmos and hops to build on a trustless two-way bridge between Incognito and Cosmos. Estimated ship date: March 2020.
* **Developer Tools**
  * **RPC** . RPC lets developers interact with Incognito via your own programs. Its code is in the [rpcserver](https://github.com/incognitochain/incognito-chain/tree/master/rpcserver) package.
  * **WebSocket** . WebSocket is another way for developers to interact with Incognito via your own programs. Its code is in the [rpcserver](https://github.com/incognitochain/incognito-chain/tree/master/rpcserver) package.
  * **SDK**. Incognito is working on Developer SDKs to make it even easier to build on top of Incognito. Estimated ship date: Nov 2019.
* **Apps**
  * **Mobile Apps**. It's easy to build your own mobile apps on top of Incognito, once the SDK is available. Here is an example: [Mobile Wallet](https://github.com/incognitochain/incognito-chain-wallet-client-app).
  * **Web Apps**. It's easy to build your web apps on top of Incognito, once the SDK is available. Here are some examples: [Web Wallet](https://github.com/incognitochain/incognito-chain-wallet-client-2) or a [Desktop Network Monitor](https://github.com/incognitochain/incognito-monitor).
  * **Hardware Devices**. It's easy to build your own hardware on top of Incognito, once the SDK is available. Here is an example: [Node Device](https://github.com/incognitochain/incognito-node).
