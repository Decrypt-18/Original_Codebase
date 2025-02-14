---
layout: default
title: estimatefeewithestimator
nav_order: 11
parent: Transactions
has_children: false
---

### estimatefeewithestimator
### Estimate by Fee Estimator
---
### Parameters:

**number** - 
**string** - private key (note: this RPC requires to reveal private key so only use it if you trust full-node you're calling to)
**number** - 
**string** - pToken ID

### Returns

**object** - Response payload, "Error" field would be not null if an error occurs, otherwise "Result" field would be not null.

- **Result**: **object** - result info:
  - **EstimateFee**: **number** - estimate fee
  - **EstimateFeeCoinPerKb**: **number** - estimate fee coin per Kb
  - **EstimateTxSizeInKb**: **number** - estimate transaction size in Kb
- **Error**: object - error info:
  - **Code**: number - error code
  - **Message**: string - error message
  - **StackTrace**: string - error stack trace

### Example

Request body:
```javascript
{
  "jsonrpc": "1.0",
  "method": "estimatefeewithestimator",
  "params": [
   -1,
   "112t8rnX5E2Mkqywuid4r4Nb2XTeLu3NJda43cuUM1ck2brpHrufi4Vi42EGybFhzfmouNbej81YJVoWewJqbR4rPhq2H945BXCLS2aDLBTA",
   1000,
   "d654d566c0ebbabe11dacc01945f7bff2e86b8b3a6701d8ab8551d37122a0429"
  ],
  "id": 1
 }
 ```
Response body:
```javascript
{
    "Id": 1,
    "Result": {
        "EstimateFee": 0,
        "EstimateFeeCoinPerKb": 3,
        "EstimateTxSizeInKb": 0
    },
    "Error": null,
    "Params": [
        -1,
        "112t8rnX5E2Mkqywuid4r4Nb2XTeLu3NJda43cuUM1ck2brpHrufi4Vi42EGybFhzfmouNbej81YJVoWewJqbR4rPhq2H945BXCLS2aDLBTA",
        1000,
        "d654d566c0ebbabe11dacc01945f7bff2e86b8b3a6701d8ab8551d37122a0429"
    ],
    "Method": "estimatefeewithestimator",
    "Jsonrpc": "1.0"
}
```
Response Description:

**object** - Response payload, "Error" field would be not null if an error occurs, otherwise "Result" field would be not null.

- **Result**: **object** - result info:
  - **EstimateFee**: **number** - estimate fee
  - **EstimateFeeCoinPerKb**: **number** - estimate fee coin per Kb
  - **EstimateTxSizeInKb**: **number** - estimate transaction size in Kb
- **Error**: **object** - error info:
  - **Code**: **number** - error code
  - **Message**: **string** - error message
  - **StackTrace**: **string** - error stack trace
