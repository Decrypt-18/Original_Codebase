---
layout: default
title: convertnativetokentoprivacytoken
nav_order: 1
parent: pDEX
has_children: false
---

### convertnativetokentoprivacytoken

Rate - PRV vs Token

Parameters

Example

Request body:

```javascript
{
    "id": 1,
    "jsonrpc": "1.0",
    "method": "convertnativetokentoprivacytoken",
    "params": [
        {
            "BeaconHeight": {{beaconHeight}},
            "NativeTokenAmount": 1,
            "TokenID": "{token id}"
        }
    ]
}
```

Response body:


Response Description:
