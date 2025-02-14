---
id: eth-bridge
title: Ethereum bridge
sidebar_label: Ethereum bridge
---


# Incognito mode for Ethereum

Incognito is a high-throughput proof-of-stake sidechain, made possible by the implementation of state sharding. Incognito takes a practical approach in designing and implementing its consensus mechanism, based on previous research and existing engineering by OmniLedger, Bitcoin, Ethereum 2.0, and Zilliqa.

The Incognito sidechain can be attached to any blockchain to conduct confidential asset transfer — in this case, Ethereum. The Incognito sidechain runs parallel to main blockchains, allowing for secure two-way transfers of crypto assets whenever privacy is needed.

This post will detail the means by which Incognito enables 100% confidential transfers of ETH and ERC20 tokens.

### Incognito mode for Ethereum

In this post, we present the Incognito-Ethereum bridge — designed for fully decentralized cross-chain interoperability. Implementations will enable cross-chain communication between the two blockchains, and enable the choice of “incognito mode” for transfers of crypto assets (ETH and ERC20 tokens). Using this bridge, anyone can turn on privacy for their tokens and shield their balances and activity.

![](https://we.incognito.org/uploads/default/original/1X/816665e36edb125502e7ed43e54191c7c9b7aa9e.png) 

In the following sections, we will define and explain the functionality of the bridge as well as the mechanism by which such requirements are implemented.

### Cross-chain asset transfer

A bridge can facilitate the transfer of crypto assets (e.g. tokens) between two blockchains by implementing locking, minting and burning mechanisms on each blockchain. When tokens are sent to a locking contract on Ethereum, Incognito needs to verify that the “locking” transaction was indeed confirmed on Ethereum, and upon the submission of the token lock transaction on Ethereum, proceed to mint a corresponding amount of privacy tokens (e.g., private Ether or private ERC20 tokens). When the private tokens are burned, the locking contract on Ethereum will verify the validity and unlock it upon submission of proof. This effectively maintains a 1:1 ratio between the private token on Incognito and the original token on Ethereum.

### Ethereum ➔ Incognito

To convert ETH/ERC20 tokens on Ethereum to private ETH/ERC20 (pETH/pERC20) tokens on Incognito, users simply need to deposit their tokens to the Incognito Wallet. Under the hood, users are in effect sending their ETH or ERC20 tokens to a decentralized smart contract on Ethereum then sending the proof of that transaction to Incognito.

The Incognito chain verifies that proof and extracts information from it in order to mint private tokens to the predefined address.

The whole process is illustrated in the following figure:

![](https://we.incognito.org/uploads/default/original/1X/4178aca7f3ad38b6c82367636d52ed42e9a11782.png) 

### Deposit Ether/ERC20 to smart contract

Our decentralized smart contract on Ethereum performs two pretty simple functions in the aforementioned deposit process — one for Ether and one for ERC20.

Our decentralized smart contract on Ethereum performs two pretty simple functions in the aforementioned deposit process — one for Ether and one for ERC20.

![](https://we.incognito.org/uploads/default/original/1X/71f184721ce138527a687e076df6d8675edbd1f6.png) 

When those functions are called, two important pieces of information ( *incognito address*  and  *deposit amount* ) will be logged in anticipation of the related transactions being confirmed on the Ethereum network. In the following section, we explain how we use this information in minting private tokens.

### Verify deposit proof

After the deposit transaction has been confirmed on the Ethereum chain, the proof can be obtained and a special transaction containing that proof can be submitted to the Incognito chain for verification, in order to mint the corresponding private tokens. The metadata of this special transaction contains the following fields:

* Incognito private token id
* Ethereum block hash
* Ethereum transaction index
* Merkle path (or proof) for a receipt relating to the deposit transaction in the Ethereum block

In order to verify the validity of an Ethereum proof on Incognito, we need to:

* (1) Make sure that each Incognito node maintains a valid Ethereum header chain.
* (2) Verify the validity of the proof (receipt’s Merkle path) with Ethereum header’s receipts root field (Merkle root). This is made possible via a receipt Trie (a special Ethereum data structure) from all receipts of transactions in a block.

Since Ethereum’s consensus is Proof of Work, here are some ways to achieve (1):

* (a) Someone continuously relays Ethereum headers into Incognito and Incognito itself calculates the proof-of-work difficulty of the header and maintains a tree of all submitted headers. A block header is valid if it resides on the longest branch of the tree (a.k.a longest chain)
* (b) Each Incognito validator node keeps a popular Ethereum light node (e.g. Parity or Geth). That light node also continuously syncs, verifies the proof-of-work difficulty and resolves the fork situation of block headers in a similar way to (1a)

In either (1a) or (1b), Incognito must obtain a valid Ethereum header in order to support the verification in (3). The team opted for (1b), a solution sufficient for moving forward based on the following assumption: as long as at least ⅓ of the number of validators in the Incognito committee run honest Ethereum light nodes, all is well. A transaction may only be comprised when when a malicious Ethereum light node is run by at least (⅔ + 1) of the number of validators. (Note: Incognito’s consensus is Proof of Stake)

The verification process is illustrated in the following figure:

![](https://we.incognito.org/uploads/default/original/1X/c51af27382200785c34b4027e20bcbe985a0b80c.png) 

### Mint private tokens

Along with the verification of Merkle path, the aforementioned process also extracts the content of the receipt belonging to a deposit transaction. From that receipt, the required information ( *incognito address*  and  *deposit amount* ) can be parsed for minting private tokens.

In other words, both  *deposit amount*  and  *incognito address*  of the receiver are stored in the proof so that no one can obtain the proof, do a front-running attack or steal any private tokens.

### Incognito ➔ Ethereum

Withdrawing is the process of converting pETH (or pERC20) on Incognito to ETH (or ERC20) on Ethereum. On Ethereum, assets (ETH and ERC20) are held in a smart contract called the  **Incognito Vault** . When someone wants to withdraw their tokens back to the main Ethereum blockchain, they need to supply the Incognito Vault with proof that sufficient tokens have been burned (i.e. destroyed) on Incognito. The private asset must be burned to maintain the 1:1 peg between the private asset on Incognito and the base asset.

The following diagram shows the whole process:

![](https://we.incognito.org/uploads/default/original/1X/b1da1fbd673b8deab7608032fb568c6805334766.png) 

### Burn private tokens

At any time, users can create a special transaction on Incognito called  **BurningRequest**  to initiate the withdrawal process. This tx sends an arbitrary amount of private tokens to the  **BurningAddress** . Assets locked in this address cannot be moved, effectively destroying them. Along with the number of tokens to be withdrawn, users also provide a valid receiving address for the corresponding asset on Ethereum.

![](https://we.incognito.org/uploads/default/original/1X/c50b8f65d2a4e48b5e701341aa12fb6514121a34.png) 

Here, TokenID is the private token id on Incognito chain, which will be used to derive the corresponding Ethereum asset (ETH or ERC20 contract address). RemoteAddress is the aforementioned address that will receive the Ethereum asset.

The tx is then mined and instructions generated and stored in the same block. This instruction will be included in a  **Burn proof** , a cryptographic proof (signed by Incognito’s validators) that someone destroyed some amount of private tokens. Since the proof is stored onchain, it is viewable for anyone wishing to assess validity. The amount and token receiver (on Ethereum) is stored in the proof so that again, no one can get your proof, do a front-running attack and steal your tokens.

The proof is only considered valid when more than ⅔ of the current number of validators have signed it. On the Ethereum side, the list of validators is stored and continually updated to mirror Incognito’s.

The full code of BurningRequest tx can be found here: https://github.com/incognitochain/incognito-chain/blob/master/metadata/burningrequest.go

### Withdraw tokens with burn proof

After a burn proof has been generated, it can be obtained from the Incognito chain and submitted to the Vault contract. The proof contains the following metadata (burn instruction in the diagram below):

* Type of token to withdraw (ETH or ERC20 address)
* Amount of token
* Token receiving address

Additionally, the contract also needs to verify that this proof is valid and signed by Incognito’s validators. We can split this into 3 steps:

1. Verify that the burn instruction is in a merkle tree with some root X
2. Merkle tree with root X is in a block with block hash Y
3. Validators signed block Y

These steps are illustrated in the diagram below:

![](https://we.incognito.org/uploads/default/original/1X/2182aaf88e73bbee625c77cc492c931803a67d77.png) 

The code below shows the first step: verifying that the instruction (with hash  *instHash* ) is in merkle tree (with root  *instRoot* ), given the merkle path ( *instPath* ).

![](https://we.incognito.org/uploads/default/original/1X/f51872231c68da9ce3537e6742f3a0e3c0150039.png) 

For the 2nd step, we need to recompute the hash of the block. On Incognito, block hash is computed by hashing the root of the merkle tree (storing all instructions) with the hash of the block body (containing all transactions). With this data, the contract can easily verify that merkle root X is in a block with hash Y.

![](https://we.incognito.org/uploads/default/original/1X/8ddddf0c86cb31bee7906aeb8939e3056c452faa.png) 

Finally, the aggregated signature helps to prove that block hash Y has been approved by a group of validators Z. Note that since the contract already stores validator public keys, there is no need to provide them when validating a burn proof. The code below shows how we check if a sufficient number of validators (at least ⅔ + 1) signed the block.

![](https://we.incognito.org/uploads/default/original/1X/22d6f6fff696eb229f882ff2adcbc383cb13126f.png) 

The Incognito Vault contract is open-source here: https://github.com/incognitochain/bridge-eth/blob/master/bridge/contracts/vault.sol

### Withdraw example on Kovan

We deployed the Incognito Vault contract on Ethereum’s Kovan testnet and configured it with the committee from the Incognito testnet (https://test-explorer.incognito.org/). The contract can be seen [here](https://kovan.etherscan.io/address/0xe722d8b71dcc0152d47d2438556a45d3357d631f).

As an example, we deposited some tokens (with [this tx](https://kovan.etherscan.io/tx/0x31f63654eef8d28bc1ce14bb13c48c93ce1a2573caa876e5ed5483fa47418070)) to the Vault and withdrew some of it by providing a burn proof (in [this tx](https://kovan.etherscan.io/tx/0x2ade11339d4656c908fde0a94dddcd7e33a84a4c07f204e046253e6ebbbe4db2)). To obtain this proof, we simply need to make an RPC call to an Incognito fullnode (http://test-node.incognito.org/). The result of the RPC call can be viewed [here](https://gist.github.com/0xbunyip/a8b9bfe4219139716eb464fa41febe53) and is partly shown in the image below:

![](https://we.incognito.org/uploads/default/original/1X/0413363345edb5e5157577c64e4019726055f365.png) 

## **Swapping committee**

We have left an important question unanswered so far: Incognito’s validators change all the time, how can the Incognito Vault smart contract keep track of them?

This is fairly simple to do by utilizing the tools discussed above. Every time a new validator joins the list or an existing one is removed (swapped), they collectively create and sign a  **SwapConfirm**  instruction. This instruction stores the pubkey of all validators and is validated in the exact same way as a burn instruction. Each committee effectively “hands over” to the next, and the chain of instructions ensure the list of validators is correct.

The following diagram illustrates this process:

![](https://we.incognito.org/uploads/default/original/1X/d9881eaa0db1e8647e15ecb4b70ee729f1cf3ffa.png) 
