---
layout: default
title: estimatefeew
nav_order: 12
parent: Transactions
has_children: false
---

### estimatefee
### Estimate - fee for token tx
---
### Parameters:

- **string** - private key (note: this RPC requires to reveal private key so only use it if you trust full-node you're calling to)
- **map** - receive info in PRV; this should be null
- **number** - network fee per kilobyte (in nano PRV); this should be 0
- **number** - privacy or not (if > 0 then privacy else no privacy), this must be less than 1
- **object** - metadata info:
  - **Privacy**: **bool** - must be true
  - **TokenID**: **string** -  pToken ID
  - **TokenName**: **string** -  token's name, this may be "" (empty string)
  - **TokenSymbol**: **string** - token's symbol, this may be "" (empty string)
  - **TokenTxType**: **number** - transaction type (0: init, 1: transfer, 2: cross shard), this must be 1
  - **TokenAmount**: **number** - token amount, this must be 0
  - **TokenReceivers**: **map** - receive info
    - **key**: **string** - receiver's address
    - **value**: **number** - send amount
  - **TokenFee**: **number** - token fee
- **string** - memo, arbitrary message
- **number** - privacy or not on pToken part (if > 0 then privacy else no privacy), this must be less then 1

### Example

Request body:
```javascript
{
  "id": 1,
  "jsonrpc": "1.0",
  "method": "estimatefee",
  "params": [
   "112t8rnXVMJJZzfF1naXvfE9nkTKwUwFWFeh8cfEyViG1vpA8A9khJk3mhyB1hDuJ4RbreDTsZpgJK4YcSxdEpXJKMEd8Vmp5UqKWwBcYzxv",
   null,
   -1,
   0,
   {
    "Privacy": true,
    "TokenID": "e9e971ec9d9df184545fde068080bdf2d231a2f05215a9c815fba50ff290aad2",
    "TokenName": "",
    "TokenSymbol": "",
    "TokenTxType": 1,
    "TokenAmount": 0,
    "TokenReceivers": {
     "12Rw9oesEgd8t5NGrfqxtWTCzh1eDif55miqZ1kFzj5zeQ6UQnNB9JXRn5Vc5QVbBaiFhoYdYPnQZ5tWwcBpse5EJXM3Av6qEV2wspv": 1000000
    },
    "TokenFee": 0
   },
   null,
   0
  ]
 }
 ```
Response body:
```javascript
{
    "Id": 1,
    "Result": {
        "EstimateFee": 4,
        "EstimateFeeCoinPerKb": 1,
        "EstimateTxSizeInKb": 4
    },
    "Error": null,
    "Params": [
        "112t8rnXVMJJZzfF1naXvfE9nkTKwUwFWFeh8cfEyViG1vpA8A9khJk3mhyB1hDuJ4RbreDTsZpgJK4YcSxdEpXJKMEd8Vmp5UqKWwBcYzxv",
        null,
        -1,
        0,
        {
            "Privacy": true,
            "TokenAmount": 0,
            "TokenFee": 0,
            "TokenID": "e9e971ec9d9df184545fde068080bdf2d231a2f05215a9c815fba50ff290aad2",
            "TokenName": "",
            "TokenReceivers": {
                "12Rw9oesEgd8t5NGrfqxtWTCzh1eDif55miqZ1kFzj5zeQ6UQnNB9JXRn5Vc5QVbBaiFhoYdYPnQZ5tWwcBpse5EJXM3Av6qEV2wspv": 1000000
            },
            "TokenSymbol": "",
            "TokenTxType": 1
        },
        null,
        0
    ],
    "Method": "estimatefee",
    "Jsonrpc": "1.0"
}
```
Response Description:

**object** - Response payload, "Error" field would be not null if an error occurs, otherwise "Result" field would be not null.

- **Result**: **object** - result info:
  - **EstimateFee**: **number** - estimate fee
  - **EstimateFeeCoinPerKb**: **number** - estimate fee coin per Kb
  - **EstimateTxSizeInKb**: **number** - estimate transaction size in Kb
- **Error**: **object** - error info:
  - **Code**: **number** - error code
  - **Message**: **string** - error message
  - **StackTrace**: **string** - error stack trace
