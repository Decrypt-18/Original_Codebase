---
layout: default
title: gettransactionhashbyreceiver
nav_order: 2
parent: Transactions
has_children: false
---

### gettransactionhashbyreceiver
### Get transaction be payment address key
---
### Parameters

- **PaymentAddress: string** - payment address key of receiver

### Example

Request body:
```javascript
{
    "id": 1,
    "jsonrpc": "1.0",
    "method": "gettransactionbyreceiver",
    "params": [
    	{"PaymentAddress": "12S5Fd34jouu4YXX41d3w75qLAhxwGxoH38imtAwDuUDK219PVZnZNamo8vwtx6CJc7SrxHnqWm3UqG9RyrB4FKr6YrKELaKhLkYC8u"}
	]
}
```
Response body:
```javascript
{
 "Id": 1,
 "Result": {
  "ReceivedTransactions": [
   {
    "BlockHash": "",
    "BlockHeight": 0,
    "TxSize": 0,
    "Index": 0,
    "ShardID": 0,
    "Hash": "",
    "Version": 0,
    "Type": "",
    "LockTime": "",
    "Fee": 0,
    "Image": "",
    "IsPrivacy": false,
    "Proof": null,
    "ProofDetail": {
     "InputCoins": null,
     "OutputCoins": null
    },
    "InputCoinPubKey": "",
    "Metadata": "",
    "CustomTokenData": "",
    "PrivacyCustomTokenID": "",
    "PrivacyCustomTokenName": "",
    "PrivacyCustomTokenSymbol": "",
    "PrivacyCustomTokenData": "",
    "PrivacyCustomTokenProofDetail": {
     "InputCoins": null,
     "OutputCoins": null
    },
    "PrivacyCustomTokenIsPrivacy": false,
    "PrivacyCustomTokenFee": 0,
    "IsInMempool": false,
    "IsInBlock": false,
    "Info": "",
    "ReceivedAmounts": {},
    "FromShardID": 2
   }
  ]
 },
 "Error": null,
 "Params": [
  ...
 ],
 "Method": "gettransactionbyreceiver",
 "Jsonrpc": "1.0"
}
```
Response Description:

**object** - Response payload, "Error" field would be not null if an error occurs, otherwise "Result" field would be not null.

- **Result: object** - transactions info:
  - **ReceivedTransactions: list [object]**
    - **BlockHash: string**
    - **BlockHeight: number**
    - **TxSize: number**
    - **ShardID: number**
    - **FromShardID: number**
    - **ReceivedAmounts: object**
    - **Fee: number**
    - **LockTime**
    - **Metadata**
- **Error: object** - **error info**:
    - **Code: number - error code**
    - **Message: string - error message**
    - StackTrace: string - error stack trace
