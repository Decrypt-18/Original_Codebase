It's finally here! The official ***vNode*** troubleshooting guide. No longer do you have to search around the forum for answers to your questions.
<br/>
Use the [Node Monitor](https://monitor.incognito.org/node-monitor) to check for issues (monitor.incognito.org).
When you see an issue come here to fix it.
<br/>
This guide assumes you have followed the official installation/setup method for your vNode(s) which can be found here: [How to setup your own node in a blink of an eye (Now support multi-nodes per host)](https://we.incognito.org/t/how-to-setup-your-own-node-in-a-blink-of-an-eye-now-support-multi-nodes-per-host/12003?u=jared)

If an alternative installation/setup method was used the only parts that would need modification are the node data locations found in steps 3, 4, and 5.

### Step 1 - Check Ports

Please make sure your vNodes ports are open and accessible (please reference the setup guide used). Visit a port checking website (eg. https://www.yougetsignal.com/tools/open-ports/). If there is a green flag and the ports are open you’re good to move to Step Two.

If, however, you see a red flag and the ports are closed please open the port on your router/server (router guide: [https://portforward.com/router.htm](https://portforward.com/router.htm)) (server guide: reference your firewall settings or ask your VPS provider)

<h3>Step 2 - Restart Docker</h3>

Use the following command via terminal on vNode:

    sudo docker restart $(sudo docker ps -aq) && rm -rfv /home/incognito/node_data_*/*.log

After 5 or so minutes check the node monitor again (monitor.incognito.org). If you continue to have issues work through the following steps until your issue(s) are resolved.

<h3>Step 3 - Force Check Update</h3>
Run the following code to stop all incognito docker containers

>docker container stop $(docker container ls -q --filter name=inc_mainnet_*)

<br/>
    (If have more than one node you should change inc_mainnet_* to the specific node you're having issues with)

Wait for docker to list the containers as it closes them. After this finishes, you can check they have closed with 

> docker ps

Next, we will re-run the script with

> ./inc*

After a few minutes, you should see your nodes running under 'docker ps'. Now check the Node Monitor and if issues still arise move on to the next step.

<h3>Step 4 - Send Logs to Devs</h3>
At this point, our devs need to take a more in-depth look into your logs to isolate the problem.
<br/>
<br/>
Please cd into your node data folder. If you are using Rocky's Node Guide then the command should be:

>cd /home/incognito/node_data_0

>(if you have more than one node please change node_data_0 to the appropriate number. node counting starts with 0.)

Now run the following command:

    apt install pastebinit -y && pastebinit -b sprunge.us -i *-`date +%Y`-`date +%m`-`date +%d`.log

The terminal will spit out a web URL. Please select the URL then 'ctrl + right click' then select copy and paste the URL into a message to the @support account. Please also include a brief response to the error(s) you're seeing. After you send this report please continue on to step 5.

<h3>Step 5 - Remove Problematic Data</h3>
Please ensure all other steps have been completed prior to this step as this step deletes data that may take a while to redownload!
<br/>
<br/>
This step has been broken up into two sections part 5a deals with removing and resyncing beacon data and part 5b deals with removing shard data. 

In the event of both shard and beacon stalls please remove the beacon data first (5a) followed by the shard data removal (5b) after complete resync of beacon data.

<h3>Step 5a - Remove Problematic Beacon</h3>

In the event of beacon data that can not be fixed with the above methods, it is recommended to delete the beacons data to clear the stall.

First, we will stop our docker containers from running again with:

    docker container stop $(docker container ls -q --filter name=inc_mainnet_*)

Now run the following command to clear the beacon data (the node number has been intentionally replaced with **#** character to prevent someone from copying and pasting without reading):

> cd /home/incognito/node_data_**#**/mainnet/block/beacon/ && rm -rfv * && cd

After this command has been completed please run the following to restart all nodes:

> ./inc*

<h3>Step 5b - Remove Problematic Shard</h3>

If you notice a stalled shard that does not fix itself in a reasonable amount of time it is best to delete that shard's data and resync. 

First, we will stop our docker containers from running again with:

    docker container stop $(docker container ls -q --filter name=inc_mainnet_*)

Next, the following command will cd into a specific shard and then wipe data  (the node number and shard number have been intentionally replaced with **#** character to prevent someone from copying and pasting without reading):

> cd /home/incognito/node_data_#/mainnet/block/shard#/ && rm -rfv * && cd

Feel free to rerun this command for any shards that are stalling. After you have finished rerun the setup script with the following:

> ./inc*