---
layout: default
title: createandsendtransaction
nav_order: 8
parent: Transactions
has_children: false
---

### createandsendtransaction
### Send PRV - Create & Send transaction PRV
---
### Parameters

- **string** - private key (note: this RPC requires to reveal private key so only use it if you trust full-node you're calling to)
- **map** - receive info: may be multiple receivers
  - **key**: **string** - receiver's payment address
  - **value**: **number** - send amount
- **number** - network fee per kilobyte (in nano PRV)
- **number** - privacy or not (if > 0 then privacy else no privacy), this must be less than 1

### Example

Request body:
```javascript
{
 "id": 1,
 "jsonrpc": "1.0",
 "method": "createandsendtransaction",
 "params": [
  "112t8roafGgHL1rhAP9632Yef3sx5k8xgp8cwK4MCJsCL1UWcxXvpzg97N4dwvcD735iKf31Q2ZgrAvKfVjeSUEvnzKJyyJD3GqqSZdxN4or",
  {
   "12RtLbrNqUhb4uMeNysWwMDzvfYQmTNyWwSXazEipTkhxzsLDQ7hb2itq2CJ3TV8pC7XS8ax5pZVePjj1L9Q2UrULfPd6yjXfrAYMKX": 175000,
   "12S1UGwviwAva472pwqbxDKkhBhLRqMrLMN7SQV2dhaCCewU7oKQ3nVZsDXCL5aeNp2kgZsw2ExQYCwFGzcjJeNZEsDAsvRA3FPuvm6": 175000
  },
  -1,
  0
 ]
}
```
Response body:
```javascript
{
    "Id": 1,
    "Result": {
        "Base58CheckData": "",
        "TxID": "bcb720c2db849db34f1000464dae5a01f4c066aa234561c27630c219c4d404a7",
        "ShardID": 0
    },
    "Error": null,
    "Params": [
        ...
    ],
    "Method": "createandsendtransaction",
    "Jsonrpc": "1.0"
}
```
Response Description:

**object** - Response payload, "Error" field would be not null if an error occurs, otherwise "Result" field would be not null.

- **Result**: **object** - result info:
  - **TxID**: **string** - transaction id
  - **ShardID**: **number** - shard id that the transaction sends to
- **Error**: **object** - error info:
  - **Code**: **number** - error code
  - **Message**: **string** - error message
  - **StackTrace**: **string** - error stack trace
