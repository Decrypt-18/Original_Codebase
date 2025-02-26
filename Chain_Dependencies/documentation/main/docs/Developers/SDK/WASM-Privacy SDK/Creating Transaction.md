---
layout: default
title: Creating a Transaction
nav_order: 4
parent: WASM Overview
has_children: false
---

### Formatting Parameter

Functions in `privacy.wasm` **must** take a callback at the end. You can promisify them by doing something like

```javascript
const bridge = global.__gobridge__;
return new Promise(async(resolve, reject) => {
    let run = () => {
        let cb = (err, ...msg) => (err ? reject(err) : resolve(...msg));
        bridge[key].apply(undefined, [...args, cb]);
    };
    if (!(key in bridge)) {
        reject(`There is nothing defined with the name "${key.toString()}"`);
        return;
    }
    if (typeof bridge[key] !== "function") {
        resolve(bridge[key]);
        return;
    }
    run();
});
```

This is what we did in our JS repo.

1. Stringify JSON objects

All JSON objects passed as parameters to `privacy.wasm` functions need to be **stringify**-ed. This makes it easier to pass to the Go-WASM environment.


### Create a PRV Transfer

A **PRV** transfer is the most basic type of transaction in Incognito. You can make one like below:

```javascript
const txParams = {
    "SenderSK": "ThHKrr8n8sJ1fRjRpU7WK4ihCcNDPgBpCSB+Yl1OGg0=",
    "PaymentInfo": [{
        "PaymentAddress": "12si2KgWLGuhXACeqHGquGpyQy7JZiA5qRTCWW7YTYrEzZBuZC2eGBfckc2NRXkQXiw7XwK2WVfKxC8AcwKGCsyRVr9SR8bN9vTcnk2PPbymztCWadgr9JMP1UY6oSk9XZb56EAKunejzNnmo9Ln",
        "Amount": "400"
    }],
    "InputCoins": [{
        "Version": "2",
        "Info": "",
        "Index": "",
        "PublicKey": "12a7bUz8HEa6GZrkkKUJdkvUHVmCGHjQzr95Ja3Y9i7Qwm8K8o5",
        "Commitment": "12rq8iVaLfF8adsrx4FXfvea4gYUtgQUdthX6NQuBekidPrhnk5",
        "KeyImage": "1yMi2U8eunYMLQ8bz5n95EBExhcFjH4UcTQ7YQLfkRSZ5CEjNo",
        "SharedRandom": "12uo3kobUwD1uFAoPkptksdeST6pHmT7zBXauyWsZwcEBW7cwvr",
        "SharedConcealRandom": "",
        "TxRandom": "12iygivV4yWkaoT7f3iMooJQ49Etdop4pmnnzX2xkvRTAEAmYPkgbuRrCGHaA3RgKiKJTczvzdgmkTCh1oQcTC5LGLarDKtJySto",
        "Randomness": "15asRu7rx2R3qkvr8WycjF9tR7WHgbxBV3DqLDGVj3jjMp25WV",
        "Value": "39999999999900",
        "CoinDetailsEncrypted": "12BvZZsNtitdavf5s62PT7nPs9tdhFECoQQEaD3iQDgxunVksFb",
        "SNDerivator": "",
        "AssetTag": ""
    }],
    "Fee": 10,
    "Metadata": null,
    "Info": "",
    "CoinCache": {
        "Indexes": [0, 0, 0],
        "Commitments": ["12rq8iVaLfF8adsrx4FXfvea4gYUtgQUdthX6NQuBekidPrhnk5", "12rq8iVaLfF8adsrx4FXfvea4gYUtgQUdthX6NQuBekidPrhnk5", "12rq8iVaLfF8adsrx4FXfvea4gYUtgQUdthX6NQuBekidPrhnk5"],
        "PublicKeys": ["12a7bUz8HEa6GZrkkKUJdkvUHVmCGHjQzr95Ja3Y9i7Qwm8K8o5", "12a7bUz8HEa6GZrkkKUJdkvUHVmCGHjQzr95Ja3Y9i7Qwm8K8o5", "12a7bUz8HEa6GZrkkKUJdkvUHVmCGHjQzr95Ja3Y9i7Qwm8K8o5"],
        "AssetTags": []
    }
}
createTransaction(JSON.stringify(txParams), 0 [, cb])
```

The output will look something like this:

```javascript
"13U6zeZi5LxsbbwBSic1yMp5kjX..."
```

It's a **Base58Check**-encoded string representing the resulting transaction. This can be directly sent to the network via the `sendRawTx` RPC

```javascript
{
    "jsonrpc": "1.0",
    "method": "sendtransaction",
    "params": [
        "13U6zeZi5LxsbbwBSic1yMp5kjX..."
    ],
    "id": 1
}
```

To read the data inside, simple decode the **Base58Check** and parse to JSON. You get:

```javascript
{
    "Version": 2,
    "Type": "n",
    "LockTime": 1609823059,
    "Fee": 10,
    "Info": "",
    "SigPubKey": "CAEAAAAAAAAAAA==",
    "Sig": "AiDhl6dOpz+SM/84xPHPVj8zipIo8dW5OcxPuPpJ4ltICAAIAuBZWGrVQ/KpBs5VcjiHO7vLPPx5bOfcZf88QxXZ2/QD2U+ayHdbnd7RUfYoR+308PuuLpFb3Fb3ETuzjW1L1AoYEYOEZ99YtsexFQ+ho+bHuqZ7pc+sVvjHMmuOe+1lCMLRjgV1aR29DKisTeKO1HDp84LdvZE2d/+Pcp3FQI4BhNnRlgtL7K/vJ/pp8qP+GMVnzd3XmBtstrPih2d+GgrsuX7/Cz49FZPGuRtS0q6WwH0qNZqqhfPCORlNU3ffClgaprI8MF/Rn7PYqbxfxdQJb9z9lbh5kSbRHGEW+CkO7i1LztisGhvSF+z5tla/0jX/Eyl4GJkA9dgpI83vXQ+13skSE3kGAH68H4i9VciDpJ7NKorr1ERE/jrhDIYVDsXBGmZ5+BqzguLhkxZiGYlz4mED27n8wx588Vc6usIEn2sOhp1Wtd+kvU9ihcMCKS/LBxPYO4Y/RJW/ke7eFQQtg7XRF6XWWAExUM/jJwfcSIBaZy+dt4LDjCzbnnOQAqZjvhO/WxA3WQhsH+XSweAuAX2MV6uHal2PZ3klDY8D86WukLr2IdRc2rdZjaXMwIbVCrYzywgSaj7c1DT+kg04rBp+B+PBdxjvdZT/zYtTUhFhjsUCxrtHjNBQQR1kDU7UnENNY3raDNh92GAVHGKLdg8IOIXAQw/epdT0AE0B",
    "Proof": "AgAAA0ICuz+7QQwQhexCiAnLKokkKeYiVg7pGj7ycTbaziZr75E5LDv26TdME+VUUnPqlw3nO4WIMsC5nnhPMMdWXJWOBIw8ASx56fDw4ksZx35jmDEwb4ATvcMSSRh9lWZHHQDKY8Qn4mNh7Apuiqhb6PlAVCRuCR2q7LEDGuwOnKK1D2VjMjhBwhpe5+P3aIg/0SRMzhNul7hH+eIM0j8YwEBkUNKwTsahrMKn0oVAHpiyczvSDc1Pb+rXrc2SH9NMPo7wDaFFJp8t+5tAb+3FaSTFTvwd+HLeoyhv185AXOcLHw4nxKPTNVaEMWsEoXW3nDNhNO4yd8QwJW++MHnlEYzLBmz1p6crWXjYKwebq+WBzNYX62M7NcX1W0L5vFVwuroEB9XfF7pzPeffB+v8NLKkLJFlI5kKodQr7ezk7wYoUXWWM3juwm9Xx34v7Ng3Y60uzGO3fldu4y6B2QIzCqCt9w+x2hjoggcPj7EoMHuA6NsCd2kj5BDBc1lTEyls6kuIXvb2QjCh0F/od+By1yrc4tXKwqWgZLvI15gyDJ0CuzrRIiKsEWecAonrDJDp+wh0ulnMiqdFIfMLIV939A6bhowzLYtO/o9+d1tehE65pBSuszgf/L9lt336kuv/XfNbJaXBMvTN2Ps+s2ZXQoIXlwkzUlnkpuzRr+nR+7QZ+NuIKkKmDwxsQVTxTuNM3R1dJkB8nEH+9KXwAm3DWJnpvDrnL6DUU0+0Ykaf49EkjZuUJc4uNgOPiovaQaItuqRICI0wF4QEf99awLbY+88lIuODzP8ikSIuSySnSA6PoNxiOChfkK/Y77NWkd8K4ChF3Q12KcWdbhGyYOioJDb3Xxn7oSVCNWK6SXIYUMsoyttGohctHKgdrVb98ri5RqxcddqhBOlWiluVcviAQHKjzdRgXuM6o0tZoOWQt5WJqxDoXbbBSAjzxOux5BpyAjs45Ku+AqQzQzOMKVSeTf1JH1np1tYeKeKTVeLtQx8l9ajFX8RRmnSSXm3fQbAL9EVyDi9tSecGLdDHy9yxuumZp6o6zANL1+7w3HQ2JypUY14H4DZGZu2KgkBvbA05SWkTXsjSXxFjiE5P9g7m4a5GjiEBrwIAAAAgf/cr/cNJbxDn2EBGRPESXEpAjYrC32duwuUDWM7ILa4g+5I3MqnaFeqC0/57UXSL5zTKrhs9x9HDzt0zKW2etgoARAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACzwIAIJDJGE6du2+QH2XVl8a1koiur5e6SAyCFPqu/MXq28b4ILs/u0EMEIXsQogJyyqJJCnmIlYO6Ro+8nE22s4ma++RAAAARGjo7Zc7yOwv41JMLGTOPTI2jcTpn3dsE5GIqB4NqVt0AAAABQt+lktsLlJwg8X84WjrYBtP7xMukEG6JaM4SNrqCcjcIESWMipiLnO9cFd3fBxi0suW6UE7ZheUrKAZ4tTBodEFICkye7wxEvwqA54TyAzqRwjR/NVBdmt7aszAGDfd4rcIAM8CACD/z6nogzvNEbnCDCOyaDlF8UrxLSBoJ7gjM1yypT1SiiA5LDv26TdME+VUUnPqlw3nO4WIMsC5nnhPMMdWXJWOBAAAAER07p6pdDOcswgtcqoh7Vpu3JgjLxssBKIel+fpyUhOjQAAAAJbb+ZIouD8s0pzfvB7ekBdb+uwPMjQgsWjNddXXChChyBTlfS4t45RPzaN7EiyUsgCzISaDBDJ3UVzRHoUS2WeDyB4J7z4JlFwUuf456l6C7o4zbSCfFlVnMgt2xPuyIjPBQA=",
    "PubKeyLastByteSender": 170,
    "Metadata": null
}
```

### Fee Deduction

Coin-transferring transactions created by `privacy.wasm` always maintain that:

```javascript
sumInput = sumOutput + fee
```

so all the excess input amount, if any, automatically goes to a "**change**" output back to the sender.

This is why there will later be some examples creating transactions "without receivers"




