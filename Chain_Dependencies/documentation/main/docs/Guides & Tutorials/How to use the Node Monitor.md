The node monitor is officially live to prepare all validators for the upcoming slashing release. It's integral for releasing the network because nodes must be healthy for the network to be stable.

For more details, a node will be slashed (a.k.a swapping out of a shard committee at the end of epoch) in case the node does not contribute sufficient required votes on blocks committed in an epoch. The required votes are 50% currently.

This is how to monitor your node and avoid slashing.

## 1. Access the Node Monitor

Navigate to https://monitor.incognito.org. You will see the following interface:

![|624x199](upload://dXas7fcHqWwIiPvMFrNYB7WEtD1.png)
*Figure 1 - The node monitor page*

The tool allows you to check your nodes’ statuses (My nodes) as well as the whole network’s inactive nodes (Inactive nodes).

## 2. Add nodes to your list

### Obtain a node’s validator key from the keychain tab in your Incognito app.

Note: the next release will include a more convenient way for you to obtain the Validator Public Key.

![|197x409](https://lh6.googleusercontent.com/iiw4Ve6xwnZtHusf5Clc57gwBMa05iumIupBISx8lGHMI5GXIwRMT3oN6eE0o63hhNQ9jx8PU1891yI7WxBDI39rNtj8OrwOw70SnllSD6opD1lv4YFdZzJ-zBwTpWLPnOmMMgnp)![|194x409](https://lh5.googleusercontent.com/38vO-YtXC4yCX940S1mNZmvzfGSjsy0YwPTh8VnYjhN-dS5YnEkD5JWBE2n5cC2XdtJxtiXJMX0weoF1P3PQw7-jmbYxOwwpMkzk9DUrPEtPz-0zUdcfHQIQZzmF5IBEzyi2LBgh)![|195x406](https://lh3.googleusercontent.com/cXGUUNYUGAp6kq1NDRInso3u3dfYHweNHOBtudNgHqEOKEh_kLaTIYNDlUn1SjIGORQr62SRGcGjtY8QiMEwYWZyyTifPiLZgPhmZntBPUzu8Hqmgciq_Cx8Br63dfZnuxbB_NGu)
*Figure 2 - Obtain Validator public key from Incognito app*

### Input node name (arbitrary), and associated validator key.

Then click ‘Check’. This will add the node to your list so you can monitor important information. To add another Node, just repeat the process.

![|624x189](upload://9nPxsIORerMjeSIGb2Z5lLWXHvq.png)
*Figure 3 - Add a node to monitor list*

## 3. Review health of your nodes

### Here’s what the information in each column means:

**Name** - the node name. This does not need to line up with the name of your node in the app.

**Validator Public key** - the key associated with this particular node.

**Role**:

* Waiting: waiting to be selected into a shard
* Pending Shard i: where i is from 0 to 7, being selected into shard i, waiting to get into a committee
* Committee Shard i: where i is from 0 to 7, being in a shard committee and earning rewards
* Not staked - the key is not yet staked

**Status**:

* Online: syncing data
* Offline: not syncing data and no votes (starting from the date the node was added to the monitor)
* Unknown: running outdated code (i.e., an old docker tag) so the tool does not have appropriate data to show.

**Sync State**:

* Node stall: syncing is disabled
* Beacon syncing: syncing beacon blocks
* Beacon stall: syncing beacon blocks but the node cannot insert the blocks. Issues may be different among nodes so please reach out to @Support for further assistance
* Shard syncing - syncing shard blocks
* Shard stall - syncing shard blocks but the node cannot insert the blocks
* Latest: syncing the up-to-date beacon block. If the node is in a shard committee, it also shows the node is caught up with shard chain
* Unknown: no data

**Vote Stats**: vote percentages of the two most recent epochs where the node was in a shard committee.

## 4. See historical activity

Just click on the node. There will be a pop-up detailing vote count (%), as well as earning history for each epoch. Please note that all data applies only from the date the Node was added to the monitor.

![|624x620](https://lh6.googleusercontent.com/RZOTMLftl5Am5_xYSSGytUsor3N5WK93ZIxoscRwfAyf49VmptQPjupCLvSDn3V99XUHHtWhPYYQfOdATvu8TvAUL4PJEO3QNKngoQaZd6-Fjgj5o4dnUkVCdeEUwWVPDP1pkWIe)
*Figure 5 - Node details*

## 5. See health of a node right on Incognito app

In addition to using the Node monitor’s web version, you can also see health as well as historical activity of your node right on Incognito app.

![|230x477](upload://cVSIvZNQJyuroBzTN6g9ihzhASR.png)![|227x470](upload://zFdIjF6vTdvW0STonxbbHfQ16DB.png)

![|233x484](upload://cZLoyzxW7A792qJlhHxb9KviEYx.png)![|235x484](upload://vCuDMwjFDdlQ1c7Cnge4vXiEBL4.png)

If you have any questions, please let us know in the comments below. @0xkumi is the responsible dev for this initiative, but feel free to reach out to any of us if you need assistance.

Looking forward to seeing an entire network of healthy nodes!

### Inactive nodes

The Inactive nodes display all nodes which may get slashed mostly because of Offline status once the Slashing is enabled.

![|624x271](upload://mTOtzlgXCgqW1fGzI4e2utuzWvH.png)
*Figure 6 - Inactive nodes*

Similarly, it’s possible to view a node details when clicking on a node from the table.

![|624x649](https://lh5.googleusercontent.com/p2-6QxS9OQoGpx3AGqAgE6GIB2MhrZcPujx2omtAC4Svwbj_zOtmMhG2m1FcVplPX-vsHa_z3ez3izvSAK6eMar8ingajkHPpqsaNKXTjp4mUsq6hvB2Bo9fHipr-6-2bB1n0zIS)
*Figure 7 - Inactive node details*

That’s it for now!

Last but not least, please start using the tool to see how your nodes operate and then take into account of getting issues resolved as soon as possible if any. Again, it’s surely our responsibility to help you out with these node issues.

We still keep working on the tool to add more insight to it such as node contribution statistics, average vote latency, histogram of vote counter and number of active/inactive nodes. Always happy to hear your feedback!