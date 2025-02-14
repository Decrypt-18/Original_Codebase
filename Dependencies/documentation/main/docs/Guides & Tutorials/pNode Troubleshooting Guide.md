## If you have not already done so, please update to the latest pNode firmware v2.0.0. The screenshots in this guide reference this new dashboard.
#Insert Link

<br/>

It's finally here! The official ***pNode*** troubleshooting guide. No longer do you have to search around the forum for answers to your questions.
<br/>
Use the [Node Monitor](https://monitor.incognito.org/node-monitor) to check for issues (monitor.incognito.org).
When you see an issue come here to fix it.
<br/>
<h2>Step 1 - Access pNode Dashboard</h2>
In order to work through these troubleshooting steps, you will need your pNodes Keychain ID and your pNodes IP address. Both of which can be found on the app as referenced in figure 1.
<br/>

![App Screenshot for IP Address and QR Code|327x675, 100%](https://incognito-discourse.s3-us-west-2.amazonaws.com/original/2X/7/748c4f2fbe0789b7df1b2881c7e4d7ae4c86a855.png) 
*Figure 1 - pNode Keychain ID & IP Address*
<br/>


If your app does not show an IP address for your pNode please reference your router's config or use the FING app (www.fing.com).

Once you have these go to your pNodes dashboard. 

> **pNode_IP_Address**:5000

**Example:** 192.168.0.216:5000

Your dashboard should look like figure 2 - pNode Dashboard.

![pNode Dashboard|755x487](https://incognito-discourse.s3-us-west-2.amazonaws.com/original/2X/d/d61e14626723c02fa7b751411c1b2e44379780ee.png) 
*Figure 2 - pNode Dashboard*

<br/>
<h2>Step 1 - Restart Docker</h2>

Sometimes the Docker container may get stuck. Restarting docker is a simple as a few button clicks. Click on the `Terminal` button at the top of the dashboard. Now input your QR code in the text field to the left. Lastly, click the `Restart Docker` button. (reference figure 3 - Restart Docker).

![Restart Docker|432x307](https://incognito-discourse.s3-us-west-2.amazonaws.com/original/2X/5/50feb11e8d289227cd514a89ff48b39a44b00e51.png) 
*Figure 3 - Restart Docker*

<br/>
<h2>Step 2 - Restart pNode</h2>

If restarting Docker does not fix your issues please perform a pNode restart/reboot (see figure 4 - pNode Reboot). Click the button labeled `Reboot`. Please note this process will make the dashboard unresponsive as your pNode turns off and then back on again. Do not unplug or disturb your device while it is rebooting.

![pNode Reboot Option|432x307](https://incognito-discourse.s3-us-west-2.amazonaws.com/original/2X/4/4e3e1e8ab3eec9d35292ab9e953b65ffd6696d5c.png) 
*Figure 4 - pNode Reboot*

<br/>
<h2>Step 3 - Pull Logs & Send to Support</h2>

If in the event none of the above steps fix your pNode you will need to pull the logs and send them to support. Please follow the following steps in order to do this.

1. Click the `Browser` button at the top of the dashboard.
2. Navigate to the most recent log files ().
3. Click the `Download` button to save them to your computer.
4. Upload to Google, Dropbox, or another cloud provider.
5. Send a message to @support with a link to said file. Please also include what issue(s) you were experiencing.

![pNode Browse Menu|2048x1420](https://incognito-discourse.s3-us-west-2.amazonaws.com/original/2X/9/9dc291b0f2190985b78710724fc49ab378d18097.png) 
*Figure 5 - pNode Browse Menu*

Logs are located in the following directory:
**/home/nuc/aos/inco-data/**

<h4>Continue to step 4...</h4>

<br/>
<h2>Step 4 - Delete Stalled Data</h2>

After working through the above steps without luck it is time to delete stalled data from your pNode.

Reference the Node Monitor (monitor.incognito.org) and make a mental note of which shard is stalling. 

From the `Terminal` menu on the pNode dashboard click the `Delete shard #` button that corresponds to the shard your pNode is stalling on (reference figure 6 - Delete Shard Buttons). Confirm this selection by clicking `Yes`. After about 30 - 60 seconds the pNode will have removed the stalled data. Now for safe measure, click the `Restart Docker` button. Once again, confirm with `Yes`.

If your beacon is stalling do the same as deleting a shard with the `Delete beacon` button.

![Delete Shard Buttons|432x307](https://incognito-discourse.s3-us-west-2.amazonaws.com/original/2X/b/bff55c638ef02dae00490f0b0715f4b3710f62c8.png) 
*Figure 6 - Delete Shard Buttons*

The process to resync data after it has been deleted is time-consuming, even with super-fast internet. After about 5 minutes check the Node Monitor again and your pNode should indicate it is redownloading and resyncing the data that was deleted. 

<br/>
<h2>Additional Step - Update Operating System</h2>

Updating the Operating System (in this case Ubuntu) is recommend to ensure pNodes have the latest code and security patches. Recommended once a month.

Click the `Update Firmware` button. Confirm with `Yes`. The system will begin pulling updates. **Note:** Do **NOT** unplug / power down / disturb your pNode during this process. The operating system is pulling a lot of code and making upgrades. This process can take a while the first time (depending on internet speed; 15+ minutes). 

![Update pNode Operating System|432x307](upload://ro8SzhGmXHymKbT9EzuoPlgsgOI.png) 
*Figure  - Update pNode Operating System*
<br/>
<h3>That's it. You should now have a fully functioning and healthy pNode!</h3>