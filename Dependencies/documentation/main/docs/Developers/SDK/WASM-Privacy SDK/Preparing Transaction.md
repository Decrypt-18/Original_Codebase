---
layout: default
title: Preparing for a Transaction
nav_order: 3
parent: WASM Overview
has_children: false
---

## Parameters

Unlike the previous version, `privacy.wasm` now uses one unified function, `createTransaction`, for creating transactions.

```
createTransaction(txParams, lockTime=0, cb)
```

`txParams` is a JSON string. It can have these fields:

- `SenderSK`: base64-encoded form of the 32-byte private key for your spending coins
- `PaymentInfo`: array of receivers, each of which must have PaymentAddress and Amount
- `InputCoins`: the coins that will be spent
- `Fee`: transaction fee (must be in PRV)
- `Metadata`: extra information used for special types of transaction such as pDex / Staking feature transactions
- `Info`: an optional message from sender
- `CoinCache`: an object of random (encrypted) coins in the Incognito network, used to hide sender identity
- `TokenParams`: some more parameters, exclusive to `pToken` transactions

Many other function names like `initPrivacyTx`, `staking`, `initBurningRequestTx` are aliases to this same function. They serve compatibility purpose only.

## Customizable Lock Time

As seen above, `createTransaction` takes an optional parameter : `lockTime`. When it is omitted or equals zero, the function will use its internal OS time when making the transaction.

However, there might be special cases where that time is not in sync with the Incognito network's time. This can invalidate your transaction, since Incognito blocks must always go forward in time. To mitigate this, you can query the network time from any Incognito node's RPC method `getnetworkinfo`,

```
POST :
{
    "jsonrpc": "1.0",
    "method": "getnetworkinfo",
    "params": "",
    "id": 1
}
```

then supply that time as an interger in  `lockTime` field.

## Handling Coins

An Incognito coin can be expressed as a JSON object. For example:

```
{
    "Version": "2",
    "Info": "",
    "Index": "",
    "PublicKey": "12a7bUz8HEa6GZrkkKUJdkvUHVmCGHjQzr95Ja3Y9i7Qwm8K8o5",
    "Commitment": "12rq8iVaLfF8adsrx4FXfvea4gYUtgQUdthX6NQuBekidPrhnk5",
    "KeyImage": "1yMi2U8eunYMLQ8bz5n95EBExhcFjH4UcTQ7YQLfkRSZ5CEjNo",
    "SharedRandom": "12uo3kobUwD1uFAoPkptksdeST6pHmT7zBXauyWsZwcEBW7cwvr",
    "SharedConcealRandom": "",
    "TxRandom": "12iygivV4yWkaoT7f3iMooJQ49Etdop4pmnnzX2xkvRTAEAmYPkgbuRrCGHaA3RgKiKJTczvzdgmkTCh1oQcTC5LGLarDKtJySto",
    "Randomness": "15asRu7rx2R3qkvr8WycjF9tR7WHgbxBV3DqLDGVj3jjMp25WV",
    "Value": "39999999999900",
    "CoinDetailsEncrypted": "12BvZZsNtitdavf5s62PT7nPs9tdhFECoQQEaD3iQDgxunVksFb",
    "SNDerivator": "",
    "AssetTag": ""
}
```

Here's a quick explanation of the structure:

- `PublicKey` and `CoinDetailsEncrypted` contains the coin's **encrypted** receiver information and amount
- `Value` is zero if the coin is encrypted, otherwise the plain amount is shown
- `KeyImage` is used for verification when spending
- `Info` is an optional message from sender
- Other fields are computed according to our privacy protocol

You need to have the correct private key to decrypt / spend this coin. If you do, call the `decryptCoin` function


```
decryptCoin(JSON.stringify({
    Coin: '<your-coin>',
    KeySet: '<your-serialized-private-key>'
}), cb)
```
