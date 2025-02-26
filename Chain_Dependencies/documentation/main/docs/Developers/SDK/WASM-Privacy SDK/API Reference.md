---
layout: default
title: API Reference
nav_order: 8
parent: WASM Overview
has_children: false
---

### createTransaction

```javascript
createTransaction(txParams, lockTime=0, cb)
```

Create an Incognito `PRV` or `pToken` transaction

Parameters:

- `txParams`: `Object` with format
  - `SenderSK`: `string` - base64-encoded 32-byte private key
  - `PaymentInfo`: `Array` of receivers
  - `InputCoins`: `Array` of coins to spend
  - `Fee`: `Number` - transaction fee (PRV)
  - `Metadata`: `Object` - extra information
  - `Info`: `string` - optional base64-encoded message
  - `CoinCache`: `Object` - other coins for hiding sender identity
  - `TokenParams`: `Object` - parameters for `pToken`, if applicable
- `lockTime`: `Number` - optional time in TX

Output: base58-encoded transaction

### createConvertTx

```javascript
createConvertTx(txParams, lockTime=0, cb)
```

Create a transaction that converts old Incognito coins to version 2 Parameters:

- `txParams`: `Object` with format
  - `SenderSK`: `string` - base64-encoded 32-byte private key
  - `PaymentInfo`: `Array` of receivers  [] works
  - `InputCoins`: `Array` of coins to spend
  - `Fee`: `Number` - transaction fee (PRV)
  - `Metadata`: `Object` - extra information
  - `Info`: `string` - optional base64-encoded message
  - `CoinCache`: `Object` - other coins for hiding sender identity
  - `TokenParams`: `Object` - parameters for `pToken`, if applicable
- `lockTime`: `Number` - optional time in TX

Output: base58-encoded transaction

### decryptCoin

```javascript
decryptCoin(coinParams, cb)
```

Decrypt an Incognito coin (of any version)

Parameters:

- `coinParams`: `Object` with format
  - `Coin`: the encrypted coin as JSON
  - `KeySet`: your base58-serialized key

Output: the decrypted coin as JSON string

### createCoin

```javascript
createCoin(coinParams, cb)
```

Create a valid, pretend One Time Address (OTA) coin object. It is not (yet) a UTXO in the Incognito chain

Parameters:

- `coinParams`: `Object` with format
    - `PaymentInfo`: `Object` with the receiver address and amount
    - `TokenID`: the `pToken` ID of this coin

### hybridEncrypt

```javascript
hybridEncrypt(rawKeyAndMsg, cb)
```

Encrypt a message using the intended receiver's Incognito public key

Parameters:

- `rawKeyAndMsg`: `string` - the concatenated byte array of their **public key** and your **message**, encoded in base64
Output: the ciphertext, encoded in base64

Output: the new OTA coin as JSON string

###hybridDecrypt

```javascript
hybridDecrypt(rawKeyAndMsg, cb)
```

Decrypt a message you received using your Incognito private key

Parameters:

- `rawKeyAndMsg`: `string` - the concatenated byte array of your **private key** and the **encrypted message**, encoded in base64

Output: the original message, encoded in base64

### scalarMultBase

```javascript
scalarMultBase(scalar, cb)
```

Elliptic curve multiply-by-base operation

Parameters:

- `scalar`: `string` - a big number encoded in base64

Output: the product - a 32-byte curve point, encoded in base64

### getSignPublicKey

```javascript
getSignPublicKey(keyParams, cb)
```

Compute a Schnorr public key using the private key

Parameters:

- `keyParams`: `Object`

```javascript
{
  "Data": {
      "Sk": "<your-base64-encoded-private-key>"
  }
}
```

Output: the public key, encoded as hex string

### signPoolWithdraw

```javascript
signPoolWithdraw(keyParams, cb)
```

Sign some information using your Schnorr private key

Parameters:

- `keyParams`: `Object`

```javascript
{
  "Data": {
      "PaymentAddress": "<address-to-sign,string>",
      "Amount": "<amount-to-sign,string>",
      "Sk": "<your-base64-encoded-private-key>"
  }
}
```

### verifySign

```javascript
verifySign(rawKeyAndSig, cb)
```

Verify a Schnorr signature

Parameters:

- `rawKeyAndSig`: `string` - the concatenated byte array of the **public key** and the **signature**, encoded as **hex string**.

Output: `true` or `false`

### generateKeyFromSeed

```javascript
generateKeyFromSeed(seed, cb)
```

Generate a private key from a seed

Parameters:

- `seed`: `string` - the byte array of the seed, encoded in base64

Output: the 32-byte private key, encoded in base64

### generateBLSKeyPairFromSeed

```javascript
generateBLSKeyPairFromSeed(seed, cb)
```

Generate a BLS key pair from a seed

Parameters:

- `seed`: `string` - the byte array of the seed, encoded in base64

Output: the concatenated private and public keys, encoded in base64

### newKeySetFromPrivate

```javascript
newKeySetFromPrivate(rawKey, cb)
```

Generate an Incognito key set from a private key

Parameters:

- `rawKey`: `string` - the byte array of the private key, encoded in base64

Output: the `KeySet` object as JSON string

### Other Functions

The function names:

- initPrivacyTx
- staking
- stopAutoStaking
- initPrivacyTokenTx
- initBurningRequestTx
- initWithdrawRewardTx
- initPRVContributionTx
- initPTokenContributionTx
- initPRVTradeTx
- initPTokenTradeTx
- withdrawDexTx

are aliases to `createTransaction`
