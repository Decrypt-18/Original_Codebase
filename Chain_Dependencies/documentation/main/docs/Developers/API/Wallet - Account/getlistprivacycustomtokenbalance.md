---
layout: default
title: getlistprivacycustomtokenbalance
nav_order: 2
parent: Wallet
has_children: false
---


### getlistprivacycustomtokenbalance
### Parameters
---

- **string** - private key (note: this RPC requires to reveal private key so only use it if you trust full-node you're calling to)

### Example

Request body:
```javascript
{
    "jsonrpc": "1.0",
    "method": "getlistprivacycustomtokenbalance",
    "params": ["113e7nr4P8UUBnVsnvD6bKygZFePvtEu2JRLsTv7wwu34RLuYhVeR5JDYW3ZoWWYE5wYwHKzov2sFh9DAmBdAeqh6sabmRMHePpJATqFeRmY"],
    "id": 1
}
```
Response body:
```javascript
{
 "Id": 1,
 "Result": {
  "PaymentAddress": "12S3afhYZsdsHGKz1bqos5La2J9qKTGAdMtFcNbR38yZeYAspyYXVc4Tx49bQCq8zfgwRviKzTrTiLmr8hshikKKdB4XC3zUi3FpT2g",
  "ListCustomTokenBalance": [
   {
    "Name": "241220180630_241220180630",
    "Symbol": "241220180630",
    "Amount": 6648,
    "TokenID": "c20327b70d1a5e0f8bf1d64959229480bdb87b45bb6fc7614bd73a7bc87f1bab",
    "TokenImage": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaQAAAGkAQMAAABEgsN2AAAABlBMVEXw8PBmCl3dyJR9AAAAoUlEQVR4nOzbQQ7CIBBAUVx5DI+qR/UYrsREFqWBtIQOu/eXTF7Xk0maJEnSqh5569uO79U4vyiKoiiKoihqkTqLoiiKoiiKouLVJx12oyiKoiiKoqh4VdodTds6Z1aKoiiKoiiKuqo6G+zz//SuXkb2XoqiKIqiKIqaUmNRFEVRFEVRVKQqdX5sqj83coOlKIqiKIqiqCklSZLC+gUAAP//LczAZRARiJ0AAAAASUVORK5CYII=",
    "IsPrivacy": true,
    "IsBridgeToken": false
   },
   {
    "Name": "301120212515_301120212515",
    "Symbol": "301120212515",
    "Amount": 999999991596106,
    "TokenID": "b2c0944d6fb51ea298ac74b4eee9967f117b7334d097f19e7f9a404784990329",
    "TokenImage": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaQAAAGkAQMAAABEgsN2AAAABlBMVEXw8PCVlIfjjsWqAAAAqUlEQVR4nOzbQQ7CIBBA0bryGD2qHtVjsFITxGQSwBAy7t5ftUzfnIAekiTpv11foXs9OsPJk6IoiqIoiqLy1WdYxsu+XeI6iqIoiqIoispR0+HSOoqiKIqiKIraV3HYVKz06yiKoiiKoigqR8Wm6mcURVEURVEUtafO8Em7THqrL4/6PLh+SlEURVEURVE56uiHfSv/SVEURVEURVHUlpIkSWm9AwAA///BxJxyTpMZNgAAAABJRU5ErkJggg==",
    "IsPrivacy": true,
    "IsBridgeToken": false
   }
  ]
 },
 "Error": null,
 "Params": [
     ...
 ],
 "Method": "getlistprivacycustomtokenbalance",
 "Jsonrpc": "1.0"
}
```
Response Description:

**object** - Response payload, "Error" field would be not null if an error occurs, otherwise "Result" field would be not null.

- **Result: object**
    - **PaymentAddress**: **string** - payment address key
    - **ListCustomTokenBalance**: **list [object]** - info of custom tokens
        - **TokenID**: **string** - 
        - **Amount**: **nmber** - 
        - **IsPrivacy**: **bool** -
- **Error**: **object** - error info:
    - **Code**: **number** - error code
    - **Message**: **string** - error message
    - **StackTrace**: **string** - error stack trace
