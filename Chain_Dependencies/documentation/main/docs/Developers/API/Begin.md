---
layout: default
title: Begin
nav_order: 1
parent: API Overview
has_children: false
---

## API Reference

Each node provides an API interface for obtaining blockchain data from it, making it easy to develop blockchain applications. The interface is provided via JSON-RPC , and the underlying protocol uses HTTP/HTTPS for communication. 

### Network endpoint

`After the JSON-RPC server starts, it will monitor the following ports, corresponding to the mainnet or testnet.`

Mainnet : https://community-fullnode.incognito.org/fullnode

Testnet : https://testnet.incognito.org/fullnode

### Command List

# NEED TO LINK FROM URL

Command | Explanation | Reference
:--- | :--- | :---
getblockchaininfo | returns the current information in the blockchain | 
retrievebeaconblock | returns beacon block info | 
retrieveblock | returns shard block info | 
retrieveblockbyheight | returns shard block info | 
retrievebeaconblockbyheight | returns beacon block info | 
getbeaconbeststate | returns the current information in beacon block | 
getbeaconbeststatedetail | returns the current information in beacon block |
getshardbeststatedetail | returns the current information in shard block | 
getburningaddress | returns the burning address | 
getminerrewardfromminingkey | returns the reward of validator | 
getincognitopublickeyrole | |
getrolebyvalidatorkey | |
getpublickeyrole | |
getpublickeymining | |
getchainminingstatus | |
estimatefee | returns estimation Fee | 
estimatefeewithestimator | returns estimation Fee | 
createtransaction | makes PRV transaction | 
sendrawtransaction | makes  PRV transaction with raw data | 
createandsendtransaction | makes transaction PRV | 
createrawprivacycustomtokentransaction | makes privacy custom token transaction | 
sendrawprivacycustomtokentransaction | makes privacy custom token transaction | 
createandsendprivacycustomtokentransaction | makes privacy custom token transaction | 
gettransactionbyhash | returns transaction detail | 
gettransactionbyreceiver | returns a list transaction base on payment address key and read only key of receiver |
gettransactionhashbyreceiver | returns a list transaction base on payment address key of receiver |
getmempoolinfo | returns a list transaction in the mempool | 
listoutputcoins | returns a list output coins | 
listunspentoutputcoins | returns a list unspend output coins | 
getbalancebyprivatekey | returns the balance PRV | 
getlistprivacycustomtokenbalance | returns the balance pToken | 
getbalanceprivacycustomtoken | returns a list balance pToken | 
createandsendtxwithprvcontributionv2 | provide liquidity to pDEX (PRV side) | 
createandsendtxwithptokencontributionv2 | provide liquidity to pDEX (pToken side) | 
createandsendtxwithprvcrosspooltradereq | trade PRV for pToken on pDEX | 
createandsendtxwithptokencrosspooltradereq | trade pToken for PRV or other pToken | 
createandsendtxwithwithdrawalreqv2 | remove liquidity from pDEX | 
createandsendtxwithpdefeewithdrawalreq | withdraw trading fees from pDEX | 
getpdestate | gets  pDEX state | 
getpdetradestatus | returns a trade pDex status | 
getpdewithdrawalstatus | returns a withdrawal pDex status | 
getpdecontributionstatusv2 | return a contribution pDex status | 
convertprivacytokentonativetoken | return a rate  Token vs PRV |
convertnativetokentoprivacytoken | returns a rate  PRV vs Token | 
createandsendburningfordeposittoscrequest | burning pToken to split amount ETH/ERC-20 in smart contract | 
createandsendburningrequest | withdraw decentralized bridged tokens ( ETH/ERC-20) to ETH address | 
createandsendcontractingrequest | withdraw centralized bridged tokens | 
createandsendtxwithissuingethreq | issue trustless bridge token | 
createandsendissuingrequest | issue trusted bridge token | 
getbridgereqwithstatus | returns a bridge request status | 
getallbridgetokens | returns a list all bridge token | 

