---
layout: default
title: gettransactionbyreceiver
nav_order: 3
parent: Transactions
has_children: false
---

### gettransactionbyreceiver
### Get transaction be payment address key and read only key
---
### Parameters

- **PaymentAddress: string** - payment address key of receiver
- **ReadonlyKey: string** - read only key of receiver

### Example

Request body:

```javascript
{
 "id": 1,
 "jsonrpc": "1.0",
 "method": "gettransactionbyreceiver",
 "params": [
  {
   "PaymentAddress": "12S5Fd34jouu4YXX41d3w75qLAhxwGxoH38imtAwDuUDK219PVZnZNamo8vwtx6CJc7SrxHnqWm3UqG9RyrB4FKr6YrKELaKhLkYC8u",
   "ReadonlyKey": "13hgqnQyVbzJ5GBzg5oQmo4mFtkA9HxKPFLY2rqXJrbTEPwYfTFcpwrZDSCJeENUwcMy7ENessUeaDXkhc6j852wTPN9jiSJSjd53JG"
  }
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
    "BlockHash": "32a1afb18c2400be1932be9005a847c7fbf85ba3ffd37ceb3ed547e6c52ec672",
    "BlockHeight": 0,
    "TxSize": 0,
    "Index": 0,
    "ShardID": 0,
    "Hash": "ef5943f60666887e0519b485458733253ca4e5434a61bdaf2c0abd291b3c7c18",
    "Version": 1,
    "Type": "n",
    "LockTime": "2021-01-11T11:17:55",
    "Fee": 5,
    "Image": "",
    "IsPrivacy": true,
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
    "Info": "13PMpZ4",
    "ReceivedAmounts": {
     "0000000000000000000000000000000000000000000000000000000000000004": {
      "CoinDetails": {
       "PublicKey": "12kAJTHDBd6KA9v2szMScH4qA8ceoFbhfTZjtTUwhgQy9wYDSqP",
       "Info": "13PMpZ4",
       "Value": 4999999583
      },
      "CoinDetailsEncrypted": "12tUgR2UB599xEXAv5J4H2t8UvEDPSysVSokeunfth42D3fxocSbJ6XdJxyhjqgWG8J1WFP2wwWbqGbctgrDT3gsU8YpBPBTLFEvDM7ndUsSwTk3T8yZyLt5wfnt7aCqa3AghvQycbzsAdaCwkm3xUuobu9XFpcSWsY2NUp"
     }
    },
    "FromShardID": 1
   },
   {...}
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
- **Error: object - error info:**
  - **Code: number - error code**
  - **Message: string - error message**
  - **StackTrace: string - error stack trace**
