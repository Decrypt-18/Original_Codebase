---
id: btc-bridge
title: Bitcoin bridge
sidebar_label: Bitcoin bridge
---

# Introduction
We are designing a general solution for building trustless bridge to UTXO-based blockchains and Bitcoin is the first network having rolled out with the approach.

## Shielding

Users who want to use the Incognito platform for private transactions have to port their current tokens from external chains to the corresponding private tokens in Incognito (BTC in bitcoin chain to pBTC in Incognito chain).

At first, users send their public tokens to a multisig address created by beacon validators in the external chain. This multisig address is unique for each Incognito payment address. After users send public tokens (BTC) to their corresponding multisig address, a worker will help users generate the transaction proof and send it to Incognito validators. After Incognito validators successfully validate the transaction proof, a corresponding amount of private token (pBTC) will be mined and sent back to the user’s Incognito address.

For example: if a user sends 0.1 BTC to the multisig address, that user will receive 0.1 pBTC.

## Unshielding

When users want to exit the Incognito mode of their tokens, they need to create a unshield request. This request is similar to burning their private tokens and providing a remote address for Incognito validators to send back their public tokens.

Unshielding requests that happened in a short period of time will be merged into batches. This mechanism will help reduce the Bitcoin network fee for each unshielding request, and minimize spending UTXOs on the external chain.

For example: if a user requests to unshield 0.1 pBTC (burn 0.1 pBTC), this user will get back 0.1 BTC minus fee for creating an unshielding Bitcoin transaction (this fee will be sent to Bitcoin miners, Incognito doesn’t receive this fee).


# Protocol Flow

(We will use Bitcoin as the example of public tokens in our protocol flow)

## Generate Bitcoin Address for each Incognito Payment Address

Each Incognito Payment Address will have a unique corresponding Bitcoin Address for sending BTC. A user who wants to shield BTC has to send BTC to the corresponding Bitcoin Address that is generated with information from Incognito validators.

This Bitcoin address can be generated on the local side. Incognito beacon validators will public their master Bitcoin public key, we use the [HD-Wallet](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki) mechanism following the Bitcoin protocol to generate extended Bitcoin public key for each Incognito payment address (the payment address will be used as the chaincode, and child index is equal to zero). These Bitcoin public keys will be merged to generate a Bitcoin [P2WSH](https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki) multisig address for each Incognito payment address.

![|624x168](https://lh5.googleusercontent.com/9YN5QBrS9fw4-gY84XUChv1X4ZHFj0qAjAV_cFHf7miLCnkwBegykgvc_i0kkV9jWdiTgkrSsgP0wOauQwoll_6-7xb-yARW6Ja99yB7K_VB2RT3ccTw4V1Dqyssm-G22P6o0r2E)

## Shield

After users transfer their BTC to their corresponding Bitcoin Address (OTMultisig). Users can send this transaction proof to Incognito validators combined with their Incognito payment address. Incognito validators will verify these proofs. If a proof is successfully validated, an amount of pBTC will be minted and sent to its corresponding Incognito payment address.

![|512x312](https://lh5.googleusercontent.com/EuMYsB0eEZ7tHCi0TUoTiuuObn0Jv3aHnIE4pmPQFOi3SbJcPHKXIb11YMuXIHep8H0GHEEkhhFxHEMGUlPJUx6vYYnAZMcueGoVnBA3zyQ4_PsnLX_byNnA19XsMUlufI9zxgLt)

## Unshield

Users create an unshielding request (burning an amount of pToken which is equal to unshielding amount). After that, beacon validators will create external transactions that spend UTXOs from the Bitcoin multisig wallets. These UTXOs are received from shielding requests. Receivers of that transaction are the user’s external Bitcoin wallet address, and the amount is the corresponding unshielding amount.

![|563x343](https://lh4.googleusercontent.com/u-S7raLlHTTTax6_XaDDn2CuAb6LqeaOYqxc1W6YCHLbHf8QZsZcdOcSszqzAMhe8cdEe2ECZJ-6GLKDO705uV3A75OL4c53GDXpHOAZ5ZaQXDj_5U5qvmsIEw7fMCf5Z9rrN-SB)!

When users unshield, in order to reduce the network fee, and minimize spending UTXOs on the external chain, we introduce the feature: Parallel Batch Processing for the list of unshielding requests. It means, all unshielding requests of users will be added to the list of waiting unshielding requests, and beacon validators will handle them every interval time.

![|624x231](https://lh6.googleusercontent.com/WHzYEaymG6I2_UeN3Pm2mHvUPVTNZFg-pDUD-e8qdQwT98X6B9PlUfpjwP16XpC8d83sWjtKHM48FbwtLDJoS2qegVA3kAgbcuB4ePVFcIvjnDmFLsekik0gMTOx7q35mxMzF8aj)

## Sign Bitcoin Transaction

When Incognito beacon validators want to spend a UTXO in a multisig wallet, they have to sign the Bitcoin transaction for spending these UTXOs.

Similar to the process that we created Bitcoin public keys for each Incognito payment address, Incognito beacon validators will generate Bitcoin private keys for each Incognito payment address and sign Bitcoin raw transactions with these keys.

![|624x204](https://lh6.googleusercontent.com/z-SMFF19m1k78FebJKaLnhFrWmAxQ3x22OYJ-4gkrEwJ_ipdMQjxBLKTot-bASmkGNrvnYEPe32PSNXoRs2sVX6Kiq85jRRvPVkvEIzFzkxD23umqH0W6wJQlXfB0_swXxOPyEja)

## Replace-By-Fee && Check Unshielding Transaction Confirmation

Incognito validators can’t directly communicate with the external blockchain. A worker will feed external chain information into the Incognito chain.

After Incognito beacon validators signed a broadcasted unshielding transaction, that worker will broadcast to the external chain. This worker will monitor until that broadcasted transaction is confirmed and notify the Incognito chain. Incognito chain will receive this information and update the list of UTXOs that the multisig wallets are holding (append the change UTXO that is sent back).

Depending on the external chain condition, in some period of time, transactions can be stuck after a very long time. A worker will listen to the external chain and feed new fees for broadcasted unshielding transactions.![|490x299](https://lh3.googleusercontent.com/4j6-3TfCZg2lJGwuhELJZkRoO0JDKgy6S4b6Nug-5tR7y76R0F3ByaAGkgoqDonRgzXaS0EUqMbiXz-1LhF2Z3d0uLCo_Ix37LtkSEMrg79xs9JmqsQjVXejU-W3povcQDIO9WHR)