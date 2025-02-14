---
layout: default
title: Begin
nav_order: 1
parent: WASM Overview
has_children: false
---


## Introduction

The WASM binary provides a basic set of functions for non-fullnode clients to perform privacy operations relevant to Incognito Chain. It comes with Incognito's Javascript Wallet API. Together they aim to provide an alternative to running one's own node and sending your keys to its RPC.

## Why WASM ?

The module's CPU-heavy functions benefit greatly from the efficiency that WASM provides, as opposed to porting them to e.g. Javascript.

## Main Features
  - Transaction creation
    - PRV transfer
    - pToken transfer
    - Features like staking, pDex etc.
  - Coin conversion
  - Incognito key generation
  - Message encryption

## Getting Started

The privacy.wasm binary is provided inside this repo.

To build your own, clone from Incognito, navigate to the WASM folder and run the build script

```bash
mkdir incognito-chain && cd incognito-chain
git clone https://github.com/incognitochain/incognito-chain
cd transaction/tx_ver2_asm
./build.sh
```

## API Reference

Visit [Incognito's GitHub](https://github.com/incognitochain/incognito-chain) for more details and Source Code.
