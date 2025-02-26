---
layout: default
title: getbridgereqwithstatus
nav_order: 6
parent: Portal
has_children: false
---

### getbridgereqwithstatus

Get bridge request status

Parameters

Example

Request body:

```javascript
{
    "id": 1,
    "jsonrpc": "1.0",
    "method": "getbridgereqwithstatus",
    "params": [
        {
        	"TxReqID": "{tx hash id}"
        }
    ]
}
```

Response body:

```javascript
{
    "Id": 1,
    "Result": 2,
    "Error": null,
    "Params": [
        {
            "TxReqID": "bdbb9e8ca1bd08bcea012a6cb38224ce19e8bad42e8b795ac61d273c83f1c20f"
        }
    ],
    "Method": "getbridgereqwithstatus",
    "Jsonrpc": "2.0"
}
```

Response Description:
