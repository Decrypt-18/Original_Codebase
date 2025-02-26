---
layout: default
title: listoutputcoins
nav_order: 5
parent: Wallet
has_children: false
---

### listoutputcoins
### Get list output coins by key
---
### Parameters

- **number** - this must be 0
- **number** - this must be 999999
- **list[object]:**
    - **PaymentAddress: string** - payment address key of receiver
    - **ReadonlyKey: string** - read only key of receiver
- **string** - token ID

### Example

Request body:
```javascript
{
    "jsonrpc": "1.0",
    "method": "listoutputcoins",
    "params": [
        0,
        999999,
        [
            {
                "PaymentAddress": "12S5Fd34jouu4YXX41d3w75qLAhxwGxoH38imtAwDuUDK219PVZnZNamo8vwtx6CJc7SrxHnqWm3UqG9RyrB4FKr6YrKELaKhLkYC8u",
                "ReadonlyKey": "13hgqnQyVbzJ5GBzg5oQmo4mFtkA9HxKPFLY2rqXJrbTEPwYfTFcpwrZDSCJeENUwcMy7ENessUeaDXkhc6j852wTPN9jiSJSjd53JG"
            }
        ],
        "b2c0944d6fb51ea298ac74b4eee9967f117b7334d097f19e7f9a404784990329"
    ],
    "id": 1
}
```
Response body:
```javascript
{
    "Id": 1,
    "Result": {
        "Outputs": {
            "13hgqnQyVbzJ5GBzg5oQmo4mFtkA9HxKPFLY2rqXJrbTEPwYfTFcpwrZDSCJeENUwcMy7ENessUeaDXkhc6j852wTPN9jiSJSjd53JG": [
                {
                    "PublicKey": "12kAJTHDBd6KA9v2szMScH4qA8ceoFbhfTZjtTUwhgQy9wYDSqP",
                    "CoinCommitment": "19vA6cWiCVZq7W9h4CqmG79dQrkht43karbxztcekeFKh2uumz",
                    "SNDerivator": "12Q3pUuvWjenmnTzPmPhXVMuh7SLEAyb76VKqHGtAxVWzyRTU59",
                    "SerialNumber": "",
                    "Randomness": "1UAPkCmyxJUQRdSrG35GxJsPsQDXdZ27ve5udomWvfoRY9JF57",
                    "Value": "1568",
                    "Info": "13PMpZ4",
                    "CoinDetailsEncrypted": "12jmE7tzP88n4RV9kJkVbdjTAikwq8QPGprCCoYV5u7LxCLyJq6oW8neGbBw5MWJamzhQj2nt4xAUrwp8yJACMUsgLJwB3t7A6DbQmi4v3t4TPU4ykuc3948TezMUUcK3MJTAYkSbXfNF2vkWetRGZKyxhyEB9vYFzt"
                },
                {
                    "PublicKey": "12kAJTHDBd6KA9v2szMScH4qA8ceoFbhfTZjtTUwhgQy9wYDSqP",
                    "CoinCommitment": "1fJjKgs7qdUngXojEuyZeFxjXBgD1pSctaURiMYNPS2hy4yf5V",
                    "SNDerivator": "1FqnheSagrA2QfGXUF7VhF5PrHJpjX1G6fpjmnZpezWPay9Y8K",
                    "SerialNumber": "",
                    "Randomness": "12QgNSFzeAFwqwoZ7Xq2aqB8vHKDBX6ypEYCAAKP3QDvJijwbK8",
                    "Value": "979999992981184",
                    "Info": "13PMpZ4",
                    "CoinDetailsEncrypted": "13PMpZ4"
                }
            ]
        }
    },
    "Error": null,
    "Params": [
        ...
    ],
    "Method": "listoutputcoins",
    "Jsonrpc": "1.0"
}
```
Response Description:

**Object** - Response payload, "Error" field would be not null if an error occurs, otherwise "Result" field would be not null.

- **Result: object** - result info:
    - **Outputs - object:**
      - **string:** read only key:  object
        - PublicKey
        - Value
- **Error: object** - error info:
    - **Code: number** - error code
    - **Message: string** - error message
    - **StackTrace: string** - error stack trace
