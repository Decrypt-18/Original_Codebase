---
id: fullnode-cache
title: Full-nodes' Cache - A Faster Way to Retrieve Users' Output Coins
sidebar_label: Full-nodes' Cache - A Faster Way to Retrieve Users' Output Coins
---

# Problem Statement
In the previous [post](https://we.incognito.org/t/introduction-to-privacy-v2/12776) about [Privacy V2](https://we.incognito.org/t/introduction-to-privacy-v2/12776), we have spotted the improvements of Privacy V2, explained Incognito keys, introduced a new key, and explained how the public key of an output coin V2 is different from that of an output coin V1. This difference leads to the impossibility to retrieve a user's output coins in the old fashion.

In Privacy V1, all of a user's output coins have the same public key, which is also the user's public key. A full-node database can seamlessly aggregate these output coins. When a user requests all of his or her output coins, the full-node only has to look for those with the same public key.

This is no longer true in Privacy V2 because we used [one-time addresses](https://we.incognito.org/t/one-time-address-improve-on-privacy-and-pdex-performance/6680) to strengthen receiver anonymity. Each of a user's output coins will now be assigned a unique public key. As a result, the full-node cannot determine whether two output coins belong to the same or different users. And thus, the full-node will be unable to respond to a user's request for output coins.

# Solution
One approach is for full-nodes to cache a user's output coins once the user submits his or her [OTA key](https://we.incognito.org/t/introduction-to-privacy-v2/12776), allowing for quick retrieval. The full-node may then scan each output coin and identify if it belongs to this user or not. However, determining whether a coin belongs to a user is costly. That's why we allow a full-node to run with two modes of operation.
* **Default mode**. After the user's keys are submitted, the full-node only caches the user's output coins. As a result, any output coins V2 received prior to the submission of the OTA key will not be stored in the full-node's cache. If a user wishes to use this mode, he/she must submit his/her key before the first output coin arrives.

* **Enhanced mode**. the full-node will re-scan the database and add all output coins of a user into its cache.

Next, we describe in detail each of these modes of operation and gives a brief comparison between the two.

![](https://incognito-discourse.s3-us-west-2.amazonaws.com/optimized/2X/3/3e15b00d91639e437804a80f8d0abe5b7c49bee4_2_675x301.png) 
*Figure. For the passive caching approach, any output coins received before your OTAKey is submitted will be "lost" in the view of the full-node. Instead, in the later approach, they will all be recoverable no matter when you submit your OTAKey.*

## The Default Mode

In this mode of operation, the full-node only starts caching a user’s output coin after the user submits the [OTA key](https://we.incognito.org/t/introduction-to-privacy-v2/12776).

Consider the following example, suppose that Bob sends a UTXO (say UTXO *A*) to Alice at block height 10, and at this time, Alice has not submitted her OTA key to the full-node. As a result, the full-node has no idea that these coins belong to Alice. 10 blocks later, i.e, block 20, Alice tells the full node to cache her coins. And right after that, David sends another UTXO (say *B*) to Alice. Now, if Alice queries her output coins from the full-node, the returned result only acknowledges the UTXO *B* (since the UTXO *A* has been “lost” in the view of the full-node).

Here is a summary of this approach.

* The full-node only does its work after Alice submits her key.
* Every time a new block arrives, the full-node will try to check if any output coins (of this block) belong to Alice. If yes, it caches these coins for Alice. This caching process is called **“passive caching”** and it does not take much effort of the full node.
* All output coins arriving before the key is submitted will be “lost”.
* To avoid losing UTXOs, users are **RECOMMENDED** to submit their key before any UTXO arrives.

### RPC Example
* **Method**: `submitkey`.
* **Params**: the only parameter is a base58-encoded OTAKey.
* **Errors**: the following are some of the error messages that might be returned by this query.

**Error Message** | Description
-----------|-----------
OTAKey has been submitted and status = v | The OTAKey has been submitted before and has status. If status = 1, the indexing process is in progress, if status = 2, the regular indexing process has finished, if status = 3, the enhanced indexing process has finished.
OTA key submission not supported by this node configuration | The current node does not have a cache layer.

## The Enhanced Mode

As we can see, the previous mode does not provide much flexibility and creates a poor user experience. That is, if a user fails to submit the key, he/she will be unable to retrieve the balance through the full-node. As a result, we introduce the enhanced mode to assist the full-node owner or anyone else authorized in retrieving their total balance.

Consider the previous Alice example. In this case, she will be able to retrieve both UTXOs *A* and *B* if she utilizes the enhanced mode.

Here is the summary of this mode.

* After a key is submitted, the full-node will try to check and cache all of the output coins of this key from the beginning.
* Because the full-node has to re-scan from the beginning, this mode is very expensive and takes quite a long time. During the time the full-node is re-indexing output coins, any operations to check balance, retrieve output coins will be **STALLED**. The longer the blockchain, the more expensive this process is. That’s why it is called **“active caching”**. Therefore, we recommend you run this mode for the full-node **ONLY**.
* Authorization is required since the full-node is easily DDoS'ed. As a result, only a limited number of users should be allowed to use this mode.
* We estimate that with more than 300 requests at the same time, the full-node will be out of order. Therefore, **DO NOT** share the access token if it is not necessary. Additionally, connections with **HTTPS** are recommended to make sure the access token is not stolen.
* Also, if the authorization fails, the basic mode will be employed.

### RPC Example
```
{
        "Jsonrpc": "1.0",
        "Method": "authorizedsubmitkey",
        "Params": [
                "14y8spKEPrqLndpwjrQsfdX4y8VWrSwAhLPmKF2GpLocEh3pvuaDoug5T7gEgifV8amh9RBs1MKa4fSvXLwL4iAovHQPLwbGcEjJ3A2",
                "0c3d46946bbf9339c8213dd7f6c640ed643003bdc056a5b68e7e80f5525310ca",
                0,
                false
        ],
        "Id": 1
}
```
* **Method**: `authorizedsubmitkey`.
* **Params**: There are 4 parameters needed
    * The first parameter is  a base58-encoded OTAKey.
    * The second is an access token. This access token is generated by the full-node’s owner, and is compulsory in this RPC.
    * The third one is the block height at which the full-node will re-scan from. If this parameter is set to 0, the full-node will rescan from the beginning.
    * The final parameter is a boolean indicating the flag reset, and it is optional. In case the privateOTA key has been indexed before and this flag is set to true, the full-node will re-index all output coins for this key.
* **Errors**: the following are some error messages that might be returned by this query.

**Error Message** | Description
-----------|-----------
OTAKey has been submitted and status = v | The OTAKey has been submitted before and has status. If status = 1, the indexing process is in progress, if status = 2, the regular indexing process has finished, if status = 3, the enhanced indexing process has finished.
OTA key submission not supported by this node configuration | The current node does not have a cache layer.
enhanced caching not supported by this node configuration | The current node only operates with the basic mode.
the current authorized queue is full, please check back later | The cache layer only supports a limited number of users at the same time to reduce the risk of being DDoS’ed.
fromHeight is larger than the current shard height  | The third parameter is larger than the current block height on the blockchain.

## Run a Node with Cache
There are two ways to run an Incognito node with the cache, from the flag command or from the config file.
### From flag
Add the following flags to the command (remember to add the `indexeraccesstoken` flag if you want to run the cache with the enhanced mode).
  * `usecoindata`: if this flag is present, the node will operate with cache.
  * `coindatapre`: the folder prefix in which the cache is stored.
  * `numindexerworkers`: the number of workers for the cache. If this number is 0, the full-node’s cache will **ONLY** operate in **BASIC** mode. Otherwise, it has an enhanced cache layer with `numindexerworkers` workers running in the background.
  * `indexeraccesstoken`: a 64-character long hex string.
  * Example command:
```
./incognito --usecoindata --coindatapre="__coins__" --numindexerworkers=100 --indexeraccesstoken="0c3d46946bbf99c8213dd7f6c640ed6433bdc056a5b68e7e80f5525311b0ca11" --discoverpeersaddress "127.0.0.1:9330" GETH_NAME="http://127.0.0.1:8545" GETH_PORT="" GETH_PROTOCOL="" --relayshards "all" --datadir "data" --listen "0.0.0.0:9433" --externaladdress "0.0.0.0:9433" --norpcauth --rpclisten "0.0.0.0:8334" --rpcwslisten 0.0.0.0:18334 --txpoolmaxtx 100000
```
### From config files
In addition to the flagged way, from this [commit](https://github.com/incognitochain/incognito-chain/releases/tag/mainnet_20210630_1), it has become much easier to run a full-node within the Incognito network, simply with a `make` command
```
make ENVIRONMENT
```
For example, if you want to run a full-node within the main-net environment, run the following command
```
make mainnet
```
The configurations and parameters for each environment are located inside the [config package](https://github.com/incognitochain/incognito-chain/tree/production/config). For each folder, there are a `config.yaml` and a `param.yaml` files.

Now, to run a full-node with a cache, add the following entries to the file `config.yaml` in the environment you want to run the node.
```
coin_data_pre: "__coins__"
use_coin_data:
 - true
num_indexer_workers: 0
indexer_access_token: "0c3d46946bbf99c8213dd7f6c640ed6433bdc056a5b68e7e80f5525311b0ca11"
```

Finally, to retrieve the output coins from a full-node after submitting an OTA key, we use the RPC `listoutputcoinsfromcache`, instead of the old `listoutputcoins`.

# Conclusion
We have shown how a cache can help a remote node retrieve output coins on receiving users' requests. There are two methods a full-node available depending on the node's performance. We summarize the differences between the two methods in the following table.
**Property**  | **Passive Caching** | **Active Caching**
--------|------------|-----------
**When to cache coins** | **AFTER** the key is submitted | From the **BEGINNING**
**UX** | Bad | Better
**Full-node's load** | Low | Very high
**#Users** | Unlimited | Limited, only a few
**Access token** | Not required | Required
**Node-friendly** | Validators/Shard/Full-nodes | Full-nodes


In the next post, we will discuss about **conversion transactions**, which are special transactions that convert UTXOs from version 1 to version 2.

## Note
For active caching, you can use the community full-node with the following information:

* Endpoint: https://beta-fullnode.incognito.org/fullnode
* Access token: `0ec910a54ffbf2a0bdfc0c8b05e8b5445e51a2ae54f659a35ac7ad9980e4fd2c`
