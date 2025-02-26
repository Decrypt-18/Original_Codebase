---
layout: default
title: getbalanceprivacycustomtoken
nav_order: 1
parent: Wallet
has_children: false
---

getbalanceprivacycustomtoken

### Parameters

- **string** - private key (note: this RPC requires to reveal private key so only use it if you trust full-node you're calling to)
- **string** - token id

Example
 Request body:
```javascript
{
	"id": 1,
    "jsonrpc": "1.0",
    "method": "getbalanceprivacycustomtoken",
    "params": [
        "113e7nr4P8UUBnVsnvD6bKygZFePvtEu2JRLsTv7wwu34RLuYhVeR5JDYW3ZoWWYE5wYwHKzov2sFh9DAmBdAeqh6sabmRMHePpJATqFeRmY",
        "24dcae8b7245812d92238a2996ed48541ad6d45c9983ab877b1480cf13a7e291"
    ]
}
```
Response body:
```javascipt
{
    "Id": 1,
    "Result": 49999999999,
    "Error": null,
    "Params": [
        ...
    ],
    "Method": "getbalanceprivacycustomtoken",
    "Jsonrpc": "1.0"
}
```
Response Description:

**object** - Response payload, "Error" field would be not null if an error occurs, otherwise "Result" field would be not null.

- **Result**: **number** - ptoken's balance
- **Error**: **object** - error info:
    - **Code**: **number** - error code
    - **Message: string** - error message
    - **StackTrace: string** - error stack trace
