---
layout: default
title: getbalancebyprivatekey
nav_order: 3
parent: Wallet
has_children: false
---

### getbalancebyprivatekey
### Parameters
---

- **string** - private key (note: this RPC requires to reveal private key so only use it if you trust full-node you're calling to)

### Example

Request body:
```javascript
{
   "jsonrpc": "1.0",
   "id": 1,
   "method": "getbalancebyprivatekey",
   "params": [
      "113e7nr4P8UUBnVsnvD6bKygZFePvtEu2JRLsTv7wwu34RLuYhVeR5JDYW3ZoWWYE5wYwHKzov2sFh9DAmBdAeqh6sabmRMHePpJATqFeRmY"
   ]
}
```
Response body:
```javascript
{
    "Id": 1,
    "Result": 900000000009750,
    "Error": null,
    "Params": [
        "113e7nr4P8UUBnVsnvD6bKygZFePvtEu2JRLsTv7wwu34RLuYhVeR5JDYW3ZoWWYE5wYwHKzov2sFh9DAmBdAeqh6sabmRMHePpJATqFeRmY"
    ],
    "Method": "getbalancebyprivatekey",
    "Jsonrpc": "1.0"
}
```
Response Description:

**object** - Response payload, "Error" field would be not null if an error occurs, otherwise "Result" field would be not null.

- **Result**: **number** - PRV's balance
- **Error**: **object** - error info:
    - **Code**: **number** - error code
    - **Message**: **string** - error message
    - **StackTrace**: **string** - error stack trace
