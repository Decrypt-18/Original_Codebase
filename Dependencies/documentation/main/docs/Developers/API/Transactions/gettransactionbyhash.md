---
layout: default
title: gettransactionbyhash
nav_order: 4
parent: Transactions
has_children: false
---

### gettransactionbyhash
### Parameters
---
- **string** - transaction hash

### Example

Request body:
``` javascript
{
 "jsonrpc": "1.0",
 "method": "gettransactionbyhash",
 "params": [
  "142e40d1a732c6d020e1885179982531ead55e2f23edcfc10577a5930ff9d760"
 ],
 "id": 1
}
```
Response body:
```javascript
{
    "Id": 1,
    "Result": {
        "BlockHash": "09759ba73cac7ad390058f57adb9fc456d898af7977a03dc3a0a78b9b66d483f",
        "BlockHeight": 1317031,
        "TxSize": 2,
        "Index": 0,
        "ShardID": 0,
        "Hash": "142e40d1a732c6d020e1885179982531ead55e2f23edcfc10577a5930ff9d760",
        "Version": 1,
        "Type": "tp",
        "LockTime": "2021-01-11T04:31:14",
        "Fee": 4,
        "Image": "",
        "IsPrivacy": false,
        "Proof": "AAABwJMORHacY5u1YvuUSwFTqCjr+nQgSVi7A5+7JP5N/FmUee6Oy8Y2k+aRXf5BkNfyonTC5Q84uT2RGnyzPHohEwCvXiZoTyc9E19gNZdszKTPZ4veI302suJTVvAJAXTMDagCPgsUyOFE1yjVa41hirfYpqF1oGk7CQrLVCTTwOFKz2raRijMNGj75dJ6D7avyc6IoatOgKkeBkyL03kEZitfhRrILD/FhcfNRReCxk7w14qEeYuEsPmxy2RKYi1oBgAAAa8gee6Oy8Y2k+aRXf5BkNfyonTC5Q84uT2RGnyzPHohEwAgiCjVRSp3j02tw+9bXXHALTXw8AxEyzgcGXYu6D13l5Qgr14maE8nPRNfYDWXbMykz2eL3iN9NrLiU1bwCQF0zA0gkw5Edpxjm7Vi+5RLAVOoKOv6dCBJWLsDn7sk/k38WZQgF/C/PLu0bwiUpfkaECVgLHn7AdwNjXE+LIZ9bBTSIwsIEeNIGfAFpwoAAZEAjyB57o7LxjaT5pFd/kGQ1/KidMLlDzi5PZEafLM8eiETACAiHEL0uqyBBce4c1UD8Nhbdr1sJt6fZZ0B2YvxFusr8CD7yGICvmwJdP9PyHExvrtQ8GdznzvKrrKLpP21IXL7DAAgFtgY9pYR6cKNCc5L9eV4+furp2dwtBVDlmHj4ZANaAEIEeNIGfAFpwYAAAAAAAAAAA==",
        "ProofDetail": {
            "InputCoins": [
                {
                    "CoinDetails": {
                        "PublicKey": "1vhaytfYK4NG5M1SiZna1eReg5igfGz5nZGbHwJQRit1heuF5n",
                        "CoinCommitment": "122y1gfUgn9q8hJ7GDL9ZafxyB89V7QeGowuiX2Ui8tESg4KBtb",
                        "SNDerivator": {},
                        "SerialNumber": "127mLoAPqQLrGLSciRWC5qCbX5TJpVzGzzJBagsF1QPxuLMfjBg",
                        "Randomness": {},
                        "Value": 1288953194596378378,
                        "Info": "13PMpZ4"
                    },
                    "CoinDetailsEncrypted": ""
                }
            ],
            "OutputCoins": [
                {
                    "CoinDetails": {
                        "PublicKey": "1vhaytfYK4NG5M1SiZna1eReg5igfGz5nZGbHwJQRit1heuF5n",
                        "CoinCommitment": "1G2JefwrLVTLzfP2zw2QAVeAYczfmAv9UJwpiVnpxZ6ZWpZTFm",
                        "SNDerivator": {},
                        "SerialNumber": "",
                        "Randomness": {},
                        "Value": 1288953194596378374,
                        "Info": "13PMpZ4"
                    },
                    "CoinDetailsEncrypted": ""
                }
            ]
        },
        "InputCoinPubKey": "1vhaytfYK4NG5M1SiZna1eReg5igfGz5nZGbHwJQRit1heuF5n",
        "SigPubKey": "1vhaytfYK4NG5M1SiZna1eReg5igfGz5nZGbHwJQRit1heuF5n",
        "Sig": "1MomPFF4rtWbTfWcyn4z4g1JaSmaYHLLDZE1DPko8vP1smr7cc3xNMofDuwRnNG8SxSQLfe1L1rLHFkWX7UEDjN6vdyHbo",
        "Metadata": "",
        "CustomTokenData": "",
        "PrivacyCustomTokenID": "67f34da74e8c0ffbaffbe0fbef300fce390eb272c538af84e865b48106c035aa",
        "PrivacyCustomTokenName": "",
        "PrivacyCustomTokenSymbol": "",
        "PrivacyCustomTokenData": "{\n\t\"TxNormal\": {\n\t\t\"Version\": 1,\n\t\t\"Type\": \"n\",\n\t\t\"LockTime\": 1610339474,\n\t\t\"Fee\": 0,\n\t\t\"Info\": \"\",\n\t\t\"SigPubKey\": \"uP4e+TOGSk2SHPLklArF9l0hdi3q9UfHxyDpfsqAgsM=\",\n\t\t\"Sig\": \"Jn65jA8kK1ba6QKnD+uaw1BtCImT9ndAsis4/rqwOQSfPLsLvsPpNdwA9d372q83kvMkfOi4vGvtssXw+Q3sC1mmCz1Iv3x1MWzP01GXhuMJJoRT5Oqng1gL6pDlQQcF\",\n\t\t\"Proof\": \"AQLAZhn9eLLQKUeprYCM2m5tXbZ7jisITq+OMZVzlmFQqxp+VXmU6894kjjfM1yfwznng/9Ay8T/uaWgUxUrREKTX4wDVys1KAyXwF2nv6VrsMY5OQktoB+m1bs0iqvLjwjKGHhsdATRoWC1I+RdGSXHEMq9WtnXVZh+iU7LggneK7DTBPJrqP1UZS64sniJ3fWM+xS6kDjwH0ZTpsDjwQezr25ozaEXLBnmtAkbC+52haIWMqGbZOd/GfjCpOJf4vpwD57Bou15tQQuhHyutzEDQlrVXliDj373wvlaf3h9C3hgNLwrl+mwBtLKMRKSvD5XLbGYNCHOm4iYCARR1eYyfzJbXiupWi9ZyHtxSyjZL7JoJZogJiilv3G9yWY702bl95zUTCNTI+gnjrCq3OYROzyz/i9TS3Ioc57RixRHoUDRj0c8nd2bVCop2K2szeBdP5MbTY9tg4AWzrundQ9fWfgGPsynuBitQuIriojBbTJxeuRBWVMyCgsvAs2KYOspXusZ+ccC95+w63VT6evMI33b9VFE3nPkznTmkLSlxgEQG/kv6Bm92EyK+O7LSOkNG/T6opqKBwr6cysn758YD3uiN2ffqsyxHC0P5xSvZEsFfnTWX+l+8lMWgHYoDBAK84iA0vabioI4nazoV8mjBEqa8a3dpo3/VClqKLuEfARBMVJN5EFZ6f47Emgaph684iX7GpiACWVNY/tD2EmfC20YFvebc3klL83icuB15N3enW5/I86qemr2bZIkrH8AuPWABD3P1SbTRWRlTxn3kOwQy1425fOUYK4l3lPlzgmnraTwBDxTjgEcYJ1cdZiBg5q1NHyzVgSNeeOMOfvRAeTnuJiI1BaaB1t+TT3SOtdlXQdvZyxQGItXPFQKj3sOGs4tqGeTqR5vCqo5sOB9vIt2NUVjfo8TewVIxvwM4wkBAUD9Vi459UrSaApohtw25I+Br/3+ddmLXHyyaFSdFpuSsLj+HvkzhkpNkhzy5JQKxfZdIXYt6vVHx8cg6X7KgILDju4mrHeBa91bXU3hJwe9RCEfNzZTf+nfz22EvFex3So6JQDkc9EMfN8lMuLz1gNIHePwZaIOeCbUvhb9fhck2cy65IQzV/n5iZ3USr/i/V6TKbmB6LWSw6HzO4ELAPt3gHMVBv00wwD7xvEW5APYWJItm9aGQXyZ1NZH3BGOrycFOKWZrKkBXkjxe3hujzee0eF7W0YO/i9ywUCxGeSeCpFnjpemA28HGWSmNNG1fYx4t7bY8k4iADTpWnHK9b0CSfVDjG8qWPA89OFivRlgoFOU/iW6L87/HOnC5otdGwNhyJa3LtFPymxXkByf5F6Cbyq/xcBJdn138TQa2IctCwADQgL+uowioy737gvBBKChTjmgC5L+MUAh2le0L8L7AC+y+G4Lu7fAoZc8VSJU1iAlxC8nQ6WTQI60ocZ8EHJX2pm6wblUqxz29+zEcQ1wi7XG4T+Lr/vzORNbUo79+qIChfpwO/rylTIt15m/z3dubMymyvGExWRmVKtjt9Pr7cvkf//SLziICDUWl6j40annSNhDY3RATM7mp3Q6ldgYPLUAWU2iLLRG8eusLn3XJLfRvZoMZR+xqpq3s5shewAVdKDA+HKzz3LTlZ3zWWJIttpYFjD66/no/fLYW4FNWMMACmKncd4e2GCa1ksL882Z9kBw4+uq18YklO7fctb3AJEEXY84E/Mvdj0OSyB9jNtiiDzMwqd7OrhpiPvF1EaflgQHY2r06VUJiEE5MBXtNs2Qm1frHi4cWPpOaNIkVbsZ3QuAaNGYgWhCZpMaZYWimoTuZDWVAaNowNaYonBp+xwy1Z1ofuXzM2tHle2PSKxVP7Q2nl9rFu3GshZQrvXOavCGvfSb1UAog+P4ynZ3u2+hziiXTkVfkvECKhO5yFzE638ZPAim/xPPKouP68Hu6caR5DOmorTps9SBWcUUU01WZu+4i/i+ITJCxKwaOM55FKmzftNnE87ucHUL1mm8ZqXticzDjSOAQa4PRy2reLkro9etd7qvtxHG/dnuvaEf5s6gtsZvLdtgev1B3WHFJYCEQPI3hvaIQiqXSsn6gQIn/2XpMKP96NT12UDe0LdVkX2E9Wt/QKBZ5nfKN9/3SJo28xSPPv2AYmvZsjqHV/SJtCM6pfxXk8mFKFmJF+fh+9nzbVo9Poq74Vbyad43ufhg0RuN2Jkn69DCIxUY41Y0sMk+wuhU1a5CDBhbP88FEFpbZWue+QUijOoEbq13rTB0u4E/+5F6So11m72HjALiEMe29G/09tyDQvEwpL9LmA7sLatnrLH7thyVdj2zq50k44Iv3gHyGjuDiIYXjy6yjfFRPlp+7L1/avH/rn418en1637/5FT4DiI3C9ydPDQKGEhSE5lWeoGxfAa8tcVbgZEqZlnGef70JkdJ5b6fiwGyVTDS6S1b1B0Hrh7t6pwz69H8kUHaVP+kpuNIL93/8QEnAAAAIP1WLjn1StJoCmiG3Dbkj4Gv/f512YtcfLJoVJ0Wm5KwAAAAAtxzO6e1WrfpQ2jMy5AVZxyne9kPhP6yZ9VNxLhVWLBqgWx4zMnZiKBa4kDOgHSFGKA/7CGmWyNpHJtuU0HPpQ2tkp4IByXS6JxGLKP66XnLNJAqHv9qH4pfQC8JWOBfIq7S2FHo04NpfGPUAk8jZkDH6ptL0WcggmmqBmCIfYcUfsGtyMc2R+zEcBqBu0TVdL9Wt41zSXAgguLwWUlsuBY4SUe9PxsDOT4XBeeTYnkpe6KDC443ldcg0H+SomjYn6a8ifUrr6jkDmDwOg6xlRkyRvVoG+eCsgMAAAAA4He9l9sHhQ0JDkUQujRDyMJNfbT6cF6tnnD/PcKSc1d5f+y5phECNTOF8EC38aSlo7W+9wPT9MUWZg++SOL4OOPOkdln0EFU0Vwr+3J3SUNmz02T4GpnDy61IXo3YCdz6Sx1l5QUPBlEYWvHitsnb0iCXO04YDG4bGcgee6Oy8Y2k+aRXf5BkNfyonTC5Q84uT2RGnyzPHohEwAgQtlToXRE3zqs6ZLUpzsrj5pX4lwtXkD3rSNXWp7mIXog070+nX5IHMr2sIDRIhhGzaD1GWPQgw00sxX+Ba5NfAYAAAAAAiD+uowioy737gvBBKChTjmgC5L+MUAh2le0L8L7AC+y+CBuC7u3wKGXPFUiVNYgJcQvJ0Olk0COtKHGfBByV9qZugIgKCQjH6v4bdl1fboSAFrKsVcDOZf90Chprqgt0B6NnqUgt4+bbkMPVsm//aYjW3RzFjTsDbnCBqxzdFgeRJryFSgCILl5uVHvDLfyqsFjf2Xfvl4ik7A8XoZjrBYz9rsxb2bzIOqWIQ9kBTGAAIe9bkimtOsd32p+1QcUL2Tk3ny1D+RJILj+HvkzhkpNkhzy5JQKxfZdIXYt6vVHx8cg6X7KgILDASC3Fc/kq38doRgRiatOn6WgOXMNsTUm4eYcRD8TF2Os9AEgju4mrHeBa91bXU3hJwe9RCEfNzZTf+nfz22EvFex3SogoS05fPuuDxCuU6HuVW9cR9+L3HN2H34TcptF7N38a+QAAAAAAAAAAwAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAA\",\n\t\t\"PubKeyLastByteSender\": 0,\n\t\t\"Metadata\": null\n\t},\n\t\"PropertyID\": \"67f34da74e8c0ffbaffbe0fbef300fce390eb272c538af84e865b48106c035aa\",\n\t\"PropertyName\": \"\",\n\t\"PropertySymbol\": \"\",\n\t\"Type\": 1,\n\t\"Mintable\": false,\n\t\"Amount\": 0\n}",
        "PrivacyCustomTokenProofDetail": {
            "InputCoins": [
                {
                    "CoinDetails": {
                        "PublicKey": "",
                        "CoinCommitment": "",
                        "SNDerivator": {},
                        "SerialNumber": "12va9PCAbcPwioebQtQfSBhVsprqZCDAT8GxWDttP4uYGMUMnfk",
                        "Randomness": {},
                        "Value": 0,
                        "Info": "13PMpZ4"
                    },
                    "CoinDetailsEncrypted": ""
                }
            ],
            "OutputCoins": [
                {
                    "CoinDetails": {
                        "PublicKey": "1zSDgeY4orfctMqkoDWQnoS4WnQWffYYhMyDbkt5SPTYECxbrD",
                        "CoinCommitment": "1zeKXfo2J6iHBRzgp4PZFvziZ38GaJsinAfLvzKYDLRNa9uAjj",
                        "SNDerivator": {},
                        "SerialNumber": "",
                        "Randomness": {},
                        "Value": 0,
                        "Info": "13PMpZ4"
                    },
                    "CoinDetailsEncrypted": "12sf6DTZw5bQ5qwu3R9QQmFrHk8EpfG3syX1o2bCKmdY5xcUvEcbPUnS3uW1eDMfgRBaXtCXmSgGxDBnHGthYFqLe9Lov9faN1d4q64pWdGBv1UMFaGFK7zTD7aj9sV2h6ZJyLNPojnCd8aRpWQkTk19JySbyZ7bz7Cj"
                },
                {
                    "CoinDetails": {
                        "PublicKey": "1vhaytfYK4NG5M1SiZna1eReg5igfGz5nZGbHwJQRit1heuF5n",
                        "CoinCommitment": "1WSZqtP1QYLxQY3RYDvGAgqCBaDkhmhf53U5N8QM7RHf6MWUVu",
                        "SNDerivator": {},
                        "SerialNumber": "",
                        "Randomness": {},
                        "Value": 0,
                        "Info": "13PMpZ4"
                    },
                    "CoinDetailsEncrypted": "1fxhqNaAriJyaz3gqikyZy9n2HmgL3hpU4hZ7EMX8WFZQNN9nnusZqVD3HwX8DTLr5TMDvJUnnVo2DeVPHNiYRxSVLwH5KEaQikLcCW248FHXkSZWNTEYYLgWScp7mxQYsR8Pbshz2FWg2tbptaeXtLX6YKjRNvXRvTmJ8G1h"
                }
            ]
        },
        "PrivacyCustomTokenIsPrivacy": true,
        "PrivacyCustomTokenFee": 0,
        "IsInMempool": false,
        "IsInBlock": true,
        "Info": ""
    },
    "Error": null,
    "Params": [
        ...
    ],
    "Method": "gettransactionbyhash",
    "Jsonrpc": "1.0"
}
```
Response Description:

**object** - Response payload, "Error" field would be not null if an error occurs, otherwise "Result" field would be not null.

- **Result: object** - result info:
  - **BlockHash: string**- block hash
  - **BlockHeight: number**
  - **TxSize: number**
  - **ShardID: number** - shard id that the transaction sends to
  - **Hash: string**
  - **Version: number**
  - **Fee: number**
  - **IsPrivacy: bool**
  - **Proof: string**
  - **ProofDetail: object** - Inputcoins & Outputcoins info
    - **InputCoins:** Input coins info (include: public key, coin commitment, value, ...)
    - **OutputCoins:** Outputcoins info (include: public key, coin commitment, value, ...)
  - **PrivacyCustomTokenID**: string
  - **PrivacyCustomTokenProofDetail: object** - Inputcoins & Outputcoins info
    - **InputCoins:** Input coins info (include: public key, coin commitment, value, ...)
    - **OutputCoins:** Outputcoins info (include: public key, coin commitment, value, ...)
- **Error: object** - error info:
  - **Code: number** - error code
  - **Message: string** - error message
  - **StackTrace: string** - error stack trace
