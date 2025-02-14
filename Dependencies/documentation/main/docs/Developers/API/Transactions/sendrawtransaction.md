---
layout: default
title: sendrawtransaction
nav_order: 9
parent: Transactions
has_children: false
---

### sendrawtransaction
### Send raw PRV transaction
---
### Parameters

**String** - Base 58 Check Data from result of PRC "createtransaction"

### Example

Request body:
```javascript
{
 "id": 1,
 "jsonrpc": "1.0",
 "method": "sendtransaction",
 "params": [{{Base58CheckData}}]
}
```
Response body:
```javascript
{
    "Id": 1,
    "Result": {
        "Base58CheckData": "",
        "TxID": "326ae532c69bcc2acae5865e7eef06c73df375099f956fb97616b8c8889fc4d2",
        "ShardID": 0
    },
    "Error": null,
    "Params": [
        ...
    ],
    "Method": "sendtransaction",
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
