---
layout: default
title: createandsendprivacycustomtokentransaction
nav_order: 5
parent: Transactions
has_children: false
---

### createandsendprivacycustomtokentransaction
---

### Parameters

- **string** - private key (note: this RPC requires to reveal private key so only use it if you trust full-node you're calling to)
- **map** - receive info in PRV; this should be null
- **number** - network fee per kilobyte (in nano PRV)
- **number** - privacy or not on PRV part (if > 0 then privacy else no privacy), this must be less than 1
- **object** - pToken & receive info:
  - **Privacy**: **bool** - must be true
  - **TokenID**: **string** - pToken ID
  - **TokenName**: **string** - token's name
  - **TokenSymbol**: **string** - token's symbol
  - **TokenTxType**: **number** - transaction type (0: init, 1: transfer, 2: cross shard), this must be 1
  - **TokenAmount**: **number** - token amount
  - **TokenReceivers**: **map** - receive info, may be multiple receivers
    - **key**: **string** - receiver's payment address
    - **Value**: **number** - send amount
  - **TokenFee**: **number** - token fee
- **string** - memo, arbitrary message
- **number** - privacy or not on pToken part (if > 0 then privacy else no privacy), this must be less then 1

### Example

Request body:
```
{
 "id": 1,
 "jsonrpc": "1.0",
 "method": "createandsendprivacycustomtokentransaction",
 "params": [
  "112t8rnX5E2Mkqywuid4r4Nb2XTeLu3NJda43cuUM1ck2brpHrufi4Vi42EGybFhzfmouNbej81YJVoWewJqbR4rPhq2H945BXCLS2aDLBTA",
  {},
  -1,
  1,
  {
   "Privacy": true,
   "TokenID": "67f34da74e8c0ffbaffbe0fbef300fce390eb272c538af84e865b48106c035aa",
   "TokenName": "",
   "TokenSymbol": "",
   "TokenTxType": 1,
   "TokenAmount": 0,
   "TokenReceivers": {
    "12RxnTs5KqyQUzGF4R2w68j3biJD29iDsFiVgC4GRy5X85anUrq1rg8P4aUyDRuS5desg9WANRptifcissMBPETyMeBE8KEh7LmQ6m7": 50000000000,
    "12Rv7iLGR4m2116m6X44yyY531WQ4j7Eroxnkv2CZKHeieDtmHUEeerq9RkPkvb8N4S3NxcBdJPDe4jHKeapzTxSVpRcGGK7NPUc1eF": 50000000000
   },
   "TokenFee": 0
  },
  "",
  1
 ]
}
```
Response body:
```javascript
{
    "Id": 1,
    "Result": {
        "Base58CheckData": "1D4URgha2mKNyYxC...",
        "ShardID": 0,
        "TxID": "25d36b0fa03baa8bd6239be9af7e7e98cf39402e06dd80e3e27ece46e4d9b6e3",
        "TokenID": "67f34da74e8c0ffbaffbe0fbef300fce390eb272c538af84e865b48106c035aa",
        "TokenName": "",
        "TokenAmount": 0
    },
    "Error": null,
    "Params": [
        ...
    ],
    "Method": "createandsendprivacycustomtokentransaction",
    "Jsonrpc": "1.0"
}
```
Response Description:

**object** - Response payload, "Error" field would be not null if an error occurs, otherwise "Result" field would be not null.

- **Result: object** - result info:
  - **TxID: string** - transaction ID
  - **ShardID: number** - shard id that the transaction sends to
  - **TokenID: string** - token ID
- **Error: object** - error info:
  - **Code: number** - error code
  - **Message: string** - error message
  - **StackTrace: string** - error stack trace
