---
id: go-sdk-v2
title: Golang SDK V2
sidebar_label: Golang SDK V2
---

### Introduction

This project serves as a general Software Design Kit (SDK) for anyone wanting to develop Incognito applications using the Go programming language. You will be able to perform general operations such as querying, creating and submitting transactions, etc.

### Repository Location

https://github.com/incognitochain/go-incognito-sdk-v2

### Installation

```go
$ go get github.com/incognitochain/go-incognito-sdk-v2
```
---
### Import

```javascript
import (
    github.com/incognitochain/go-incognito-sdk-v2/incclient
)
```
---
### Read the Code

The main focus of this project lies in the `incclient` package. It provides access to almost all functions needed to create transactions, become a node validator, retrieve information from full-nodes, shield or un-shield access, etc. One can find the instruction of how to use this go-sdk in the `tutorials` package. Besides, if you want to understand the code, try other packages:

  - [Coin](https://github.com/incognitochain/go-incognito-sdk-v2/blob/master/coin) implements input and output coins, which are basic elements of a transactions. Incognito is currently supporting two version of coins.
  - [Common](https://github.com/incognitochain/go-incognito-sdk-v2/blob/master/common) handles all common functions and variables used in this project.
  - [Crypto](https://github.com/incognitochain/go-incognito-sdk-v2/blob/master/crypto) implements the `Edwards25519` elliptic curve as well as the Pedersen commitment scheme.
  - [ETH_Bridge](https://github.com/incognitochain/go-incognito-sdk-v2/blob/master/eth_bridge) consists of smart contracts, mainly responsible for shielding or un-shielding ETH, ERC20.
  - [Key](https://github.com/incognitochain/go-incognito-sdk-v2/blob/master/key) handles all key-related things including private keys, payment addresses, read-only keys, OTA private keys or mining keys.
  - [Metadata](https://github.com/incognitochain/go-incognito-sdk-v2/blob/master/metadata) contains additional information enclosed with a transaction to specify their special functions. They include, but not limited to
      - pDEX
      - Staking
      - Bridge
      - Portal
  - [Privacy](https://github.com/incognitochain/go-incognito-sdk-v2/blob/master/privacy) is the most important layer of the Incognito network. It helps protect user anonymity, transaction confidentiality. The `privacy` layer features
      - Ring Signatures: For privacy, Incognito implements MLSAG signatures with stealth addresses.
      - Zero-Knowledge Proofs: We use zero-knowledge proofs (ZKPs) to hide the amount of a transaction.
      - Confidential Assets: ZKPs hide the amount of the transaction, but they don't hide the type of transferred asset. Confidential Asset solves that.
  - [rpcHandler](https://github.com/incognitochain/go-incognito-sdk-v2/blob/master/rpchandler) is responsible for interacting with full-nodes to retrieve information.
  - [Transaction](https://github.com/incognitochain/go-incognito-sdk-v2/blob/master/transaction) helps create various types of transactions ranging from regular transferring transactions, to pDEX trading, or staking transactions.
  - [Wallet](https://github.com/incognitochain/go-incognito-sdk-v2/blob/master/wallet) helps generate new key-sets, restore keys, etc.

### Tutorials

The sdk comes with a series of examples that we believe anyone will encounter when they develop an application on the Incognito blockchain. It will help you walk through most things that you should be aware of in order to create an effect Incognito-related application. See the list of tutorials [here](https://github.com/incognitochain/go-incognito-sdk-v2#tutorials). 

### Contribution

Any issues are welcomed to be submitted at issues. And feel free to make a pull request if you observe things that should be improved.
Following is a series of examples to help you get familiar with the Incognito network. The list does not cover all the capabilities of the SDK, we will try to cover them as much as possible.
