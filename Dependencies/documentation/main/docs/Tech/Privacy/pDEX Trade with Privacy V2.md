---
id: pdex-with-privacy2
title: pDEX Trade with Privacy V2
sidebar_label: pDEX Trade with Privacy V2
---

# Introduction
 
pDEX is one of the most essential parts of the Incognito ecosystem. Therefore, we always work towards bringing a better and better trading experience to users. Today, we are happy to announce better anonymity in pDEX trades.

## pDEX Trading

### pDEX trading with Privacy v1
First, let's recall how anonymous a trade was in Privacy v1. In Privacy v1, [each output coin of a user has the user's public key](https://we.incognito.org/t/introduction-to-privacy-v2/12776). As a result, the user's address must be provided with the trade request to make sure that the later-received asset would be minted to the right user. Furthermore, every trade request of the same user will have the `TraderAddressStr` unchanged. This led to an undesired result where users had to sacrifice their anonymity. 
```
{
    "TokenIDToBuyStr": "3f89c75324b46f13c7b036871060e641d996a24c09b3065835cb1d38b799d6c1",
    "TokenIDToSellStr": "716fd1009e2a1669caacc36891e707bfdf02590f96ebd897548e8963c95ebac0",
    "SellAmount": 444088028,
    "MinAcceptableAmount": 444181612740,
    "TradingFee": 160,
    "TraderAddressStr": "12RpyM7xBh9B9jEd6KGTyVVaGtkAjDPSNQfNRBkPC9prroEqusrZoJnqYWeBqHrCDoS4kDLEUfpfETPmQEZbvZiFPU77nF1kk8jQXq5",
    "Type": 205
}
```
*Figure. An example of a trade request on Privacy v1 with the trader's address displayed in plain.*

```
{
    "TokenIDToBuyStr": "3f89c75324b46f13c7b036871060e641d996a24c09b3065835cb1d38b799d6c1",
    "TokenIDToSellStr": "716fd1009e2a1669caacc36891e707bfdf02590f96ebd897548e8963c95ebac0",
    "SellAmount": 389643752,
    "MinAcceptableAmount": 389715926330,
    "TradingFee": 160,
    "TraderAddressStr": "12RpyM7xBh9B9jEd6KGTyVVaGtkAjDPSNQfNRBkPC9prroEqusrZoJnqYWeBqHrCDoS4kDLEUfpfETPmQEZbvZiFPU77nF1kk8jQXq5",
    "Type": 205
}
```
*Figure. Another trade of the same user. We can see the `TraderAddressStr` remains unchanged.*

### pDEX trading with Privacy v2
Thanks to [OTAs](https://we.incognito.org/t/introduction-to-privacy-v2/12776), trading now is completely anonymous. Each trade request now only requires (one or two) OTAs. And two different trade requests of the same users will have different OTAs. Thus, traceability becomes impossible.
```
{
	"TokenIDToBuyStr": "0d05bdb0e36da10fa601342493460a56a3ff119efc14b0240c40f6249e99fece",
	"TokenIDToSellStr": "0000000000000000000000000000000000000000000000000000000000000004",
	"SellAmount": 5000000,
	"MinAcceptableAmount": 6666778,
	"TradingFee": 100,
	"TraderAddressStr": "12aCu34oJ3z89cdmoEHGNWXCe91LnLQanbnp83qDsCfWm7Vw8xp",
	"TxRandomStr": "12zkjPKzeKhePf5S6xFNo2kyZo7NzGTn8xfjXu3EN6AdBSq9ySaHk8KeBhjfLD1ZkxjKCNBMzKcRUZ7en4nuqbrxsvpnuVRB8AAG",
	"SubTraderAddressStr": "1Kc3CPswar9G1dbdFfkdsgFQ1WU2sB3wokWEGowL5Df4DjFTZR",
	"SubTxRandomStr": "12ysPjQ1H9Ebh4BNr5cTgqAKEPZipmq3obmUMc4uVsh5TUFQDWRDfqWi9JwoGUTA1WwPV8CgFQgqCtfo2RLny2zkHVJeZCcKhzyY",
	"Type": 205
}
```
*Figure. An example of a trade request on Privacy v2. As we can see, the real trader address is now replaced by a one-time address public key. In addition, a `SubTraderAddressStr` is needed to return the trading fee when the trade fails.*

```
{
	"TokenIDToBuyStr": "0d05bdb0e36da10fa601342493460a56a3ff119efc14b0240c40f6249e99fece",
	"TokenIDToSellStr": "0000000000000000000000000000000000000000000000000000000000000004",
	"SellAmount": 5000000,
	"MinAcceptableAmount": 6666766,
	"TradingFee": 100,
	"TraderAddressStr": "177uphRSEPFUP4nVHnRxyS5fsLuntwf2iMTHjqLTAPmYHotYEo",
	"TxRandomStr": "13PEd93gQri8QdQRqrm15GGVV8c4QQ5rZwG2UuARmUS5Z85fBdRViTo1tWtK7yahbTUiJhkAcgD6gX4YDnKaUMMv52JsVE5NqJRA",
	"SubTraderAddressStr": "1WWm2gyLSZwS6a9Upe1dCvTSWyQsLCPCWteiq8nQuHPQjD4x9t",
	"SubTxRandomStr": "137ZkPcRoUG324Jc77U96hiwgbYdjKX3uMtspMJ3EYTk1tB5aRPquRP5xjfbzRvKaowdqZV2KDrbgGiKgQfJWiMg7LK4cxandFRX",
	"Type": 205
}
```
*Figure. Another trade request of the same user. Now, the `TraderAddressStr` is completely different.*
### Trading with the Incognito app

Let's take a look at how the trading process on the Incognito app changes with better anonymity and users' experience.

![](https://incognito-discourse.s3-us-west-2.amazonaws.com/optimized/2X/e/eb68630d3598ccec8feb9565659e73df6d27ed23_2_696x162.png)
*Figure. To ensure traders' anonymity, the old Incognito app introduced a temporary address where the actual trade is processed. In this approach, 1) the trader had to send the token to trade (say **A**) to the temporary address; 2) the intermediary account burned the token **A**; 3) the pDEX minted the corresponding amount of token to buy (say **B**) for the trade to the temporary account; and finally 4) the temporary account sends the token **B** back to the trade. It requires at least 4 transactions to complete a trade.*

It required at least 4 transactions required to complete a trade. Failures in any of these transactions would lead to users' funds being locked. The introduction of a temporary account on the one hand kept the trader anonymous. But on the other hand, it enforced the trader to trust the one who owned this account.

![](https://incognito-discourse.s3-us-west-2.amazonaws.com/optimized/2X/1/11e4813395c6a51fb2531c08622cad577b6a624b_2_696x159.png)
*Figure. Trading with Privacy V2 is straightforward. No intermediary account is needed, and it only requires 2 transactions.*

With Privacy V2, there are only 2 transactions needed. This helps reduce the trading time, as well as the probability of failure and asset lock. Furthermore, the removal of the temporary account ensures that users will have no risk of maintaining their assets.

We summarize the enhancement of pDEX trading on the Incognito app in the following Table.

**Property** | **Privacy V1** | **Privacy V2**
--|--|--
**#Txs needed** | 4 | 2
**Trading time** | long | short
**Temporary account** | YES | NO
**Trust required** | high | low
**Failure probability** | high | low
*Table. A comparison between pDEX trading on Incognito app.*

# Conclusion

We hope that you find this series helpful on the way to understand Privacy V2. With the new version, Incognito is now having a much robust and better infrastructure. Again, the privacy protocol is one of the most important pillars of Incognito that will be the fuel to boost everything else of the platform to a new level. A staging app that enables you to experience the big upgrade will be released right after the topic, can't wait to put it in your hand and hear your thoughts :wink: 

## Future Works
Shielding and un-shielding can potentially be enhanced with Privacy V2, where the shielding amount can be sent to a [one-time address](https://we.incognito.org/t/one-time-address-improve-on-privacy-and-pdex-performance/6680), and burner address will be kept private with the [MLSAG signature](https://web.getmonero.org/resources/research-lab/pubs/MRL-0005.pdf). However, there are some security concerns for these approaches and we are working really hard on them to bring a better anonymity to these types of transactions to you as soon as possible.