---
id: prv-bridge
title: Ethereum and BSC bridges for PRV
sidebar_label: Ethereum and BSC bridges for PRV
---



In the past, PRV - a native token of Incognito was only used inside the Incognito network, but now people can own, send and receive PRV in external networks such as Ethereum and BSC. This still maintains PRV’s hard cap around 100M by using mint & burn mechanism that’s quite similar to the [Incognito-Ethereum trustless bridge](https://we.incognito.org/t/incognito-mode-for-ethereum/53).

## PRV in Incognito to PRV in Ethereum (ERC20) or BSC (BEP20)

The main idea is pretty simple: burn PRV in the Incognito and mint PRV (ERC20 or BEP20) in an external network with 1:1 ratio. The process is shown in the following diagram:

![](https://incognito-discourse.s3-us-west-2.amazonaws.com/original/2X/2/2265af444cd7427be97a80cb5aac7f1e78e940d2.jpeg)

### Step 1: Burn PRV in Incognito

A user creates the Incognito transaction to burn PRV, the transaction also contains the address he will receive PRV in the external network.

After the burning PRV transaction is confirmed in the Incognito chain, the burning amount is deducted from the total PRV supply.

### Step 2: Submit PRV burn-proof to external network:

A burn-proof to prove PRV burned in the Incognito is submitted to the external network. Anyone can do this, if you use the Incognito app, an Incognito backend service will help with it.

### Step 3: Smart contract releases PRV (ERC20 or BEP20):

The smart contract verifies the burn-proof. If it is valid, the smart contract will mint PRV to an address which is enclosed in the proof. After the step, the total PRV supply is increased by the minting amount.

**Note**: Since the feature was released, the total supply of the PRV is the sum of PRV supply from the Incognito chain, Binance Smart Chain, and Ethereum.

## PRV in Ethereum (ERC20) or BSC (BEP20) to PRV in Incognito

Conversely, one can burn their PRV in Ethereum or BSC to mint back PRV in Incognito with 1:1 ratio. The process is shown in the following diagram:

![](https://incognito-discourse.s3-us-west-2.amazonaws.com/original/2X/0/0ee674148ad1ded6c2a9d4da8764e2d9fa5de17e.jpeg)

### Step 1: Burn PRV (ERC20 or BEP20)

A user burns the PRV (ERC20 or BEP20) from an external network by sending the token to the respective smart contract. The transaction also contains the address he will receive PRV in the Incognito. The total PRV is decreased by the burning amount.

### Step 2: Submit PRV (ERC20 or BEP20) burn-proof to Incognito:

A deposit proof to prove PRV burned in a respective smart contract is submitted to the Incognito. Anyone can do this, if you use the Incognito app, an Incognito backend service will help with it.

### Step 3: Incognito releases PRV

The Incognito chain verifies the deposit proof. If it is valid, Incognito will mint PRV to the incognito address which is enclosed in the proof. After the step, total PRV supply is increased by the minting amount.

## Conclusion

With this feature, the PRV may be used in either Ethereum or BSC, this will open up more use cases for PRV. We hope the community will make use of this new feature and benefit from it.