---
layout: default
title: getmempoolinfo
nav_order: 1
parent: Transactions
has_children: false
---

### getmempoolinfo
### Get mempool information
---
### Parameters

### Example

Request body:
```javascript
{
 "jsonrpc": "1.0",
 "method": "getmempoolinfo",
 "id": 1
}
```
Response body:
```javascript
{
    "Id": 1,
    "Result": {
        "Size": 1,
        "Bytes": 1,
        "Usage": 0,
        "MaxMempool": 0,
        "MempoolMinFee": 0,
        "MempoolMaxFee": 2,
        "ListTxs": [
            {
                "TxID": "405ce8b538d50f0c5548e3123736e0e8b6c32aa8955995e4da1df811404ff70b",
                "LockTime": 1610420539
            }
        ]
    },
    "Error": null,
    "Params": null,
    "Method": "getmempoolinfo",
    "Jsonrpc": "1.0"
}
```
Response Description:

**object** - Response payload, "Error" field would be not null if an error occurs, otherwise "Result" field would be not null.

- **Result: object** - result info:
    - **Size: number**
    - **Bytes: number**
    - **MempoolMinFee: number**
    - **MempoolMaxFee: number**
    - **ListTxs: list objects** - transactions info (include: TxID, LockTime)
