---
layout: default
title: createandsendburningfordeposittoscrequest
nav_order: 1
parent: Portal
has_children: false
---

### createandsendburningfordeposittoscrequest

Burning pToken to split amount eth/erc-20 in smart contract

### Parameters

#### Example

Request body:

```javascript
{
    "id": 1,
    "jsonrpc": "1.0",
    "method": "createandsendburningfordeposittoscrequest",
    "params": [
        "{private key}",
        null,
        5,
        -1,
        {
            "TokenID": "{token id}",
            "TokenTxType": 1,
            "TokenName": "",
            "TokenSymbol": "",
            "TokenAmount": 0,
            "TokenReceivers": {
                "burning address": {burned amount}
            },
            "RemoteAddress": "{remote address}",
            "Privacy": true,
            "TokenFee": 0
        },
        "",
        0
    ]
}
```

Response body:

```
```

Response description:
