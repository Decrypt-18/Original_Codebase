---
id: conversion-tx
title: Conversion Transactions
sidebar_label: Conversion Transactions
---


## What is a conversion transaction?
A conversion transaction is a special transaction that converts a list of UTXOs in version 1 into a UTXO in version 2. The UTXOs could be PRV or tokens. 

As Privacy V2 is coming in a few days, we'll see more and more transactions v2 on the network. If you miss how crazy Privacy V2 is, visit this [post](https://we.incognito.org/t/introduction-to-privacy-v2/12776).  Each transaction v2 consumes a list of UTXOs v2 as input and produces a list of UTXOs v2. Therefore, conversion is mandatory for those who still have UTXOs v1 and wish to use them in v2 to enhance privacy. Besides, the Incognito network will soon not accept transactions of v1. Therefore, UTXOs conversion is a must.

A conversion transaction is (by default) *non-private*. All information (sender, amount, tokenID) will be publicly visible. Its properties are summarized in the following table.

Property|Description|Note
--|--|---
Hide amount| NO|
Hide sender| NO|
Hide receiver| YES | One-time address
Hide asset type | No 
*Table. A summary of conversion transactions. Although the receiver is hidden by a one-time address, in most cases, the receiver of this transaction is also the sender.*

## How to convert your UTXOs
### Using the Incognito app
Firstly, navigate to the **Asset** screen.
![](https://incognito-discourse.s3-us-west-2.amazonaws.com/original/2X/f/fb14da3ee1a9fb66a61b38d63026e84e64de267a.png) 

If you still have UTXOs v1, there will be a little message at the bottom of the screen. Hit on that message. A converting screen will appear.
![](https://incognito-discourse.s3-us-west-2.amazonaws.com/original/2X/0/0ab00cf13af4f7494985a8832ef21cb166645630.png) 

A list of tokens with UTXOs v1 will be displayed. Hit on **Go to convert screen** button.
![](https://incognito-discourse.s3-us-west-2.amazonaws.com/original/2X/c/c0bdb2bbb11ee9ba5e576f6dc055e65d6d5ed4fc.png) 

Now, click the **Convert** button and wait until the process finishes. When the process is successful, the **Convert** screen will look like the following
![](https://incognito-discourse.s3-us-west-2.amazonaws.com/original/2X/6/6d248ef2accb3866855ae5893c3b6930d7e1e2ed.png) 

Note that a conversion transaction consumes at most 30 UTXOs v1 at a time. In case you have a huge number of UTXOs v1, you have to spend an enormous amount of time. Another solution is to consolidate these UTXOs into a smaller set (less than 30) before converting time. The consolidating function is also available on the App as well as on the [CLI tool](https://github.com/incognitochain/incognito-cli#consolidate).

However, the consolidation only works before the `PrivacyV2BreakPoint` takes effect because v1 transactions will be rejected after that time. More detail on this will be discussed in a different post.  To avoid this annoying problem, you can use the [CLI tool](https://github.com/incognitochain/incognito-cli) to convert all of your UTXOs with a single command.

### Using the CLI tool
Converting UTXOs on the Incognito app is a costly operation if you have a lot of UTXOs  v1. Users will have to wait for an enormous amount of time before this operation finishes. Therefore, have built a very simple [command-line application](https://github.com/incognitochain/incognito-cli) for some basic functionalities, including converting UTXOs. The instruction on how to use this tool can be found [here](https://github.com/incognitochain/incognito-cli#convert). 

```shell
$ incognito-cli help convert
NAME:
   incognito-cli convert - Convert UTXOs of an account w.r.t a tokenID.

USAGE:
   convert --privateKey PRIVATE_KEY [--tokenID TOKEN_ID] [--numThreads NUM_THREADS] [--enableLog ENABLE_LOG] [--logFile LOG_FILE]

   OPTIONAL flags are denoted by a [] bracket.

CATEGORY:
   TRANSACTIONS

DESCRIPTION:
   This function helps convert UTXOs v1 of a user to UTXO v2 w.r.t a tokenID. Please note that this process is time-consuming and requires a considerable amount of CPU.

OPTIONS:
   --privateKey value, --prvKey value  a base58-encoded private key
   --tokenID value                     ID of the token (default: "0000000000000000000000000000000000000000000000000000000000000004")
   --numThreads value                  number of threads used in this action (default: 4)
   --enableLog                         enable log for this action (default: false)
   --logFile value                     location of the log file (default: "os.Stdout")
```
Suppose your private key is `` and you want to convert the token `` using `10` threads.  Just run the following command, and wait.
```shell
$ incognito-cli convert --privateKey YOUR_PRIVATE_KEY --tokenID --numThreads 10
```

## Conclusion
Conversion transactions are the portal to the [Privacy V2](https://we.incognito.org/t/introduction-to-privacy-v2/12776) world where you can truly go incognito. However, the way to that utopian world costs you some sort of privacy. This amount of privacy is just the same as a regular v1 trade transaction or a shielding, un-shielding transaction that you have been doing until now. Therefore, in the end, it does not cost that much. In the next post, we'll explain how [Privacy V2](https://we.incognito.org/t/introduction-to-privacy-v2/12776) affects pDEX trading transactions.
