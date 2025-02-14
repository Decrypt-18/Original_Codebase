---
layout: default
title: getpdestate
nav_order: 6
parent: pDEX
has_children: false
---

### getpdestate

Get pDEX state

Parameters 

object - condition info:

BeaconHeight: number - beacon height

Example

Request body:

```javascript
{
    "id": 1,
    "jsonrpc": "1.0",
    "method": "getpdestate",
    "params": [
        {
            "BeaconHeight": 1000
        }
    ]
}
```

Response body:

```javascript
{
    "Id": 1,
    "Result": {
        "WaitingPDEContributions": {
            "waitingpdecontribution-1000-add-liquidity-prv": {
                "ContributorAddressStr": "12S5Lrs1XeQLbqN4ySyKtjAjd2d7sBP2tjFijzmp6avrrkQCNFMpkXm3FPzj2Wcu2ZNqJEmh9JriVuRErVwhuQnLmWSaggobEWsBEci",
                "TokenIDStr": "0000000000000000000000000000000000000000000000000000000000000004",
                "Amount": 3000000000000000,
                "TxReqID": "407cc671d79f880557674c4d298bbd8152aed877d651e00fb6c458bc02d7d2e9"
            },
            "waitingpdecontribution-1000-haha3": {
                "ContributorAddressStr": "12S5Lrs1XeQLbqN4ySyKtjAjd2d7sBP2tjFijzmp6avrrkQCNFMpkXm3FPzj2Wcu2ZNqJEmh9JriVuRErVwhuQnLmWSaggobEWsBEci",
                "TokenIDStr": "0000000000000000000000000000000000000000000000000000000000000004",
                "Amount": 3000000000000000,
                "TxReqID": "4cc39821e89ca7e5015eecf37f4383ce503b53fbf0947d8aaee4cd11a934bfeb"
            }
        },
        "PDEPoolPairs": {},
        "PDEShares": {},
        "PDETradingFees": {},
        "BeaconTimeStamp": 1606982670
    },
    "Error": null,
    "Params": [
        ...
    ],
    "Method": "getpdestate",
    "Jsonrpc": "1.0"
}
```

Response Description:

**object** - Response payload, "Error" field would be not null if an error occurs, otherwise "Result" field would be not null.

- **Result**: object - result info:
  - **WaitingPDEContributions**: **map** - waiting adding liquidity info
  - **PDEPoolPairs**: **map** - pDEX pairs info
  - **PDEShares**: **map** - pDEX shares info
  - **PDETradingFees**: **map** - pDEX trading fees
- **Error: object** - error info:
  - **Code: number** - error code
  - **Message: string** - error message
  - **StackTrace: string** - error stack trace

