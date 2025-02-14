---
layout: default
title: Creating Feature Transactions Using Metadata
nav_order: 7
parent: WASM Overview
has_children: false
---

### The metadata parameter

Transferring tokens is not the only thing you can do in Incognito chain. You can become a validator to earn rewards, shield / unshield your coins to and from other chains, swap your `pTokens` permissionlessly, etc...

All you have to do is provide the right `Metadata` that specifies the action you want to do. It is an object in your `txParams` parameter, and gets passed on to the transaction to the network.

```javascript
{
    // ...
    "Fee": 10,
    "Metadata": {
        "..." : "..."
    },
    "Info": "",
    // ...
}
```

Both basic and `pToken` transaction can include `Metadata`. There is only one `Metadata` per transaction.

### Some example Metadata

- Staking: 1750 PRV to participate in consensus

```javascript
{
    "Type": 63,
    "Sig": null,
    "FunderPaymentAddress": "12sxXUjkMJZHz6diDB6yYnSjyYcDYiT5QygUYFsUbGUqK8PH8uhxf4LePiAE8UYoDcNkHAdJJtT1J6T8hcvpZoWLHAp8g6h1BQEfp4h5LQgEPuhMpnVMquvr1xXZZueLhTNCXc8fkVXseeVAGCt8",
    "RewardReceiverPaymentAddress": "12sxXUjkMJZHz6diDB6yYnSjyYcDYiT5QygUYFsUbGUqK8PH8uhxf4LePiAE8UYoDcNkHAdJJtT1J6T8hcvpZoWLHAp8g6h1BQEfp4h5LQgEPuhMpnVMquvr1xXZZueLhTNCXc8fkVXseeVAGCt8",
    "StakingAmountShard": 1750000000000,
    "AutoReStaking": true,
    "CommitteePublicKey": "121VhftSAygpEJZ..."
}
```

- Contribute: your tokens to the chains decentralized exchange

```javascript
{
    "PDEContributionPairID": "SAMPLE-PAIR",
    "ContributorAddressStr": "12sxXUjkMJZHz6diDB6yYnSjyYcDYiT5QygUYFsUbGUqK8PH8uhxf4LePiAE8UYoDcNkHAdJJtT1J6T8hcvpZoWLHAp8g6h1BQEfp4h5LQgEPuhMpnVMquvr1xXZZueLhTNCXc8fkVXseeVAGCt8",
    "ContributedAmount": 5000000,
    "TokenIDStr": "0000000000000000000000000000000000000000000000000000000000000004",
    "Type": 204,
}
```

- Trade: swap your PRV to get an amount of `pToken` determined by `pDex`'s rates; or vice versa.

```javascript
{
    "TokenIDToBuyStr": "699a3006d1865ebdc437053b33df6a62c6c7c2f554f2fd0adf99a60f5117f945",
    "TokenIDToSellStr": "0000000000000000000000000000000000000000000000000000000000000004",
    "SellAmount": 1000000,
    "TraderAddressStr": "12WHs6NvFwxQsFvUphjDqaHvRcLYyC79dF9kDwdtJRVrwSyA2cs",
    "Type": 205,
    "MinAcceptableAmount": 400000,
    "TradingFee": 25,
    "TxRandomStr": "13SZePe9Q7nd8XX3Pfu4JpcTTRQgfsEzo4rksDaCspW7GE9CBLHoKMPHcWT5iRaWk6xn8LAsL5ghpgdG9RwoQPGuWGj6CXHenQhe"
}
```

### Burning Coins

Some metadata types, like `BurningRequest` requires your input coins to be "**burned**". This means one of your receivers' `PaymentAddress` must be the Incognito burn address - and that receiver's amount is the **burned amount**.

The burning address is a constant, so you could just store it for use; or you can query it from the RPC using the method `getburningaddress`.

```javascript
POST :
{
    "jsonrpc": "1.0",
    "method": "getburningaddress",
    "params": [0],
    "id": 1
}
```

Example:

```javascript
{
    "BurnerAddress": {
        "OTAPublic": "ag4eqDXA4iywZLfhdHnwfcFIRAAXCleohWfbOzpdecw=",
        "Pk": "/NPaKTA3pYTjYxdWpSvOlsp+hAzbwc6Q8x0qynd2+ao=",
        "Tk": "avALxL0vIbNCiJQxg41df7ml71CgzA/BL1M7kjmXiAQ="
    },
    "BurningAmount": 100,
    "TokenID": "699a3006d1865ebdc437053b33df6a62c6c7c2f554f2fd0adf99a60f5117f945",
    "RemoteAddress": "d5808Ba261c91d640a2D4149E8cdb3fD4512efe4",
    "Type": 27
}
```

If your **burned amount** is larger than what is specified on the `Metadata`, the extra will be lost. Therefore, you should test this kind of transaction on the Test network beforehand to make sure it has the exact effect that you want.
