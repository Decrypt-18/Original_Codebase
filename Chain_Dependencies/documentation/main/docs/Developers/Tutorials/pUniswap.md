---
id: tutorial-puniswap
title: pUniswap Developer Tutorial
sidebar_label: pUniswap
---

This guide is intended for readers interested in developing privacy app (papp) with Incognito or learning about them technically, instead of using them.

## Reminder: a typical papp workflow

![|469x426](https://incognito-discourse.s3-us-west-2.amazonaws.com/optimized/3X/b/8/b85f2cb20185febd19216ec1a127d8a385c589d7_2_469x426.png)

**Note**: Bridge is a two-way trustless bridge between Incognito and Ethereum. It is responsible for forwarding instructions between the two chains. It consists of multiple relayers. Relayers cannot forge or corrupt the instruction content in any way, because every instruction is cryptographically signed by users and verified on both ends of the bridge.

The workflow above shows the process from start to finish of a pApp. In the next sections, we are breaking it down into 3 smaller steps along with sample code of each step’s components for building a privacy version of a pretty common dApp - Uniswap. Specifically, there are 3 components we will need to implement to swap tokens with Uniswap anonymously through Incognito platform:

* (*) pUniswap UI (Typescript)
* (**) Bridge (Golang, in the tutorial, we only refer to utility functions that the Bridge will use to perform needed tasks in the workflow for simplicity, you can wrap the functions under automatic workers in your production application)
* (***) pUniswap Adapter (Solidity)

A complete source code can be found at the [repository](https://github.com/incognitochain/puniswap-tutorial). This contains three main directories: puniswap-ui, bridge, adapter - respectively to the three components above.

### Step 1:

Create, sign and send swap instructions for a token swap from pUniswap UI to Incognito blockchain via Incognito wallet extension.

![|359x213](https://incognito-discourse.s3-us-west-2.amazonaws.com/optimized/3X/5/0/50ea8c7804a5d80f81c62b1d949253d694dd51d4_2_359x213.png)

First thing we need to do is implementing an UI for our pUniswap’s swap form. Something like:

![|463x345](https://incognito-discourse.s3-us-west-2.amazonaws.com/optimized/3X/f/6/f6651eed48966d1f91c9c949d1d1bc17dd12447d_2_463x345.png)

If Incognito wallet extension hasn’t been installed yet, the CTA button would navigate user to the [Chrome Store](https://chrome.google.com/webstore/detail/incognito-wallet/chngojfpcfnjfnaeddcmngfbbdpcdjaj) for install. After installed, the CTA button will be used for connecting wallet by opening the wallet extension popup as follows:

```ts
export const getIncognitoInject = () => window.incognito;

const showPopup = () => {
  const incognito = getIncognitoInject();
  if (!!incognito) {
    incognito.request({
      method: 'wallet_showPopup',
      params: {},
  });
  } else {
    // extension not installed
  }
};
```

After wallet connected, we will need to display user’s account information on the UI. A sample of account data structure should be:

```ts
type Balance = {
  amount: string;
  id: string; // tokenID
};

type AccountDetail = {
  keyDefine: string; // account ID
  balances: Balance[],
  paymentAddress: string; // incognito address
};

type AccountInfo = {
  accounts: AccountDetail[],
  otaReceiver: string;
};
```

With the above data structure, we use the following functions to get user’s account information that we can use to display on our UI.

```ts
const incognito = getIncognitoInject();

// return extension state locked unlocked
const getWalletState = async () => {
  if (!incognito) return
  const { result } = await incognito.request({
    method: 'wallet_getState',
    params: {},
  });
  return result.state; // locked unlocked
};

// return data with type AccountInfo
const requestIncognitoAccount = async () => {
  let accounts = undefined;
  if (!incognito) return;
  const state = (await getWalletState()) {};
  if (state === 'unlocked') {
    const { result } = await incognito.request({
      method: 'wallet_requestAccounts',
      params: {},
    });
    accounts = result;
  }
  return accounts;
}
```

Next, we create a swap payload from the UI’s inputs. The data structure of the payload along with its sample should look like:

```ts
type Payment {
  Amount: string;
  Message: string; // optional
  PaymentAddress: string // receiver address
}

type Payload {
  info?: string // memo
  metadata: any;

  networkFee?: number;
  prvPayments: Payment[];
  tokenPayments: Payment[];
  tokenID: string;
  receiverAddress: string
  txType: number // random any number
  isSignAndSendTransaction: boolean; // if no need to send rawTx to IncognitoChain then set false
}
```

A sample payload of swapping pUSDT for pMatic via Uniswap in Polygon network:

```js
{
  "metadata": {
    "Data": [{
      "IncTokenID": "716fd1009e2a1669caacc36891e707bfdf02590f96ebd897548e8963c95ebac0", // USDT's TokenID with Ethereum Network
      "RedepositReceiver": "16XD3EKE7xSCzAtVUKLPWq3Tac6dSNLWJeHx8g89DbHetWJbBjuoq8pwGm67MhSw9aSjaes6eZfstRofEuFXVYRHXzXtjGqNYmgf6GiTcjCNGBbqFTPKipKLD9Cpj968Aj7yusENayikbNsa", // Receiver's OTA achieved from requestIncognitoAccount's otaReceiver field
      "BurningAmount": "1000000", // Swap amount
      "ExternalNetworkID": 1, // Ethereum NetworkID is 1
      "ExternalCalldata": "421f4388000000000000000000000000c2132d05d31c914a87c6611c10748aeb04b58e8f0000000000000000000000000d500b1d8e8ef31e21c99d1db9a6444d3adf127000000000000000000000000000000000000000000000000000000000000001f4000000000000000000000000cc8c88e9dae72fa07ac077933a2e73d146fecdf000000000000000000000000000000000000000000000000000000000000003e7000000000000000000000000000000000000000000000000000311832a534fa700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001",
      "ExternalCallAddress": "CC8c88e9Dae72fa07aC077933a2E73d146FECdf0", // removed prefix 0x
      "ReceiveToken": "0000000000000000000000000000000000000000", // Swapping token's contract address
      "WithdrawAddress": "0000000000000000000000000000000000000000",
    }],
  "BurnTokenID": "076a4423fa20922526bd50b0d7b0dc1c593ce16e15ba141ede5fb5a28aa3f229", // USDT(unified)
  "Type": 348
  },
  "info": "",
  "networkFee": 100000000,
  "prvPayments": [],
  "tokenPayments": [{
    "PaymentAddress": "12stZ9UxpNNd8oKjuf5Bpfb44AvrogVVZCVjjF2u9K2Q1s55LHrQxXypSRZ9BV1PtphRf1JxiBaKbmhmKdj3c7DWt4kkcKV4HyWcuws8YPiZbHuDxFxdar9vQvbB3pvYGQAaj4PR38Sr52fiTDPn",
    "Amount": "33593747",
    "Message": ""
  },
  {
    "PaymentAddress": "12RxahVABnAVCGP3LGwCn8jkQxgw7z1x14wztHzn455TTVpi1wBq9YGwkRMQg3J4e657AbAnCvYCJSdA9czBUNuCKwGSRQt55Xwz8WA",
    "Amount": "1000000",
    "Message": ""
  }],
  "tokenID": "076a4423fa20922526bd50b0d7b0dc1c593ce16e15ba141ede5fb5a28aa3f229",
  "txType": 7,
  "receiverAddress": "12su5sVeYCEjQfcn5XCzkKsSmctXrmhvmPmc5C4gDGk8hAAB4upSQqoFB7zVijw7gsvnUyjdx5m6GzKDqSps2v2gjxTxmErq48wqWU4qDsG61HrERu6odcZ5dAztD96Vtxy3XeYSrkWFEshfe8wZ",
  "isSignAndSendTransaction": false
}
```

A notable information in the sample payload above is ExternalCalldata that is used to call Uniswap’s swap function. The calldata can be acquired with the BuildCallDataUniswap function, its full implementation can be found at: https://github.com/incognitochain/puniswap-tutorial/blob/main/bridge/build_calldata.go

In the bridge folder use this command to try the function:
```bash
go test -timeout 30s -run ^TestBuildCallDataUniswap$ bridge -v
```

To conclude the step 1, we will need to sign a transaction for the swap payload with the wallet extension and then broadcast the signed one to Incognito blockchain:

```ts
// Note: get OTA receiver via function requestIncognitoAccount
// NetworkID: ETH: 1, BSC: 2, PLG: 3, FANTOM: 4, AURORA: 5, AVALANCHE: 6
// return tx with txHash, rawData

const requestSignTransaction = async (payload: Payload) => {
  const incognito = getIncognitoInject();
  try {
    if (!incognito) return;
    const { result } = await incognito.request({
      method: 'wallet_signTransaction',
      params: {
        ...payload,
      },
    });
    return Promise.resolve(result);
  } catch (e) {
    return Promise.reject(e);
  }
};
```

### Step 2:

The Bridge extracts swap instruction from Incognito blockchain and then submits the instruction to Incognito Vault to pass a calldata extracted from the instruction to Uniswap contracts for executing the swap.

![|353x379](https://incognito-discourse.s3-us-west-2.amazonaws.com/optimized/3X/5/7/5761aeefa8f9d9db301d82620a4d88b91788822c_2_353x379.png)

We will need to implement an adapter smart contract that is used to “plug” Incognito Vault and Uniswap contracts together. Specifically, since the Vault cannot interact directly with an external dapp, we need to have an adapter contract to receive requests and funds from the Incognito Vault then forward to dapp smart contract(s). Reversely, it will also format the response to comply with the Vault’s requirement.

To more easily understand the context, let’s take a look at the following snippet of code which is executed from vault contract:

```solidity
result = Executor(executor).execute{value: msgval}(to, externalCalldata);
require(result.length == 64, errorToString(Errors.INVALID_RETURN_DATA));
(address returnedTokenAddress, uint returnedAmount) = abi.decode(result, (address, uint));
require(returnedTokenAddress == redepositToken && balanceOf(redepositToken).safeSub(balanceBeforeTrade) == returnedAmount, errorToString(Errors.INVALID_RETURN_DATA));
```

From the snippet above, we know that result from calling external contract must return values as in the following format (token contract address, received amount):

* token contract address: the token will be transferred back to the Vault after the execution of cross contract call completed.
* received amount: amount of token sent back to the Vault.

Firstly the adapter must know the interface of Uniswap so that it can forward requests from the Vault properly.

```solidity
interface UniswapV2 {
  function factory() external pure returns (address);
  function WETH() external pure returns (address);

  function swapExactTokensForTokens(
    uint amountIn,
    uint amountOutMin,
    address[] calldata path,
    address to,
    uint deadline
  ) external returns (uint[] memory amounts);

  function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline) external payable returns (uint[] memory amounts);
  function swapExactTokensForETH(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts);
  function getAmountsOut(uint amountIn, address[] calldata path) external view returns (uint[] memory amounts);
}
```

Next we need to implement the helper functions as follows:

```solidity
function ethToToken(address[] memory path, uint srcQty, uint amountOutMin) internal returns (uint[] memory) {
  return uniswapV2.swapExactETHForTokens{value: srcQty}(amountOutMin, path, msg.sender, now + 100000);
}

function tokenToEth(address[] memory path, uint srcQty, uint amountOutMin) internal  returns (uint[] memory) {
  return uniswapV2.swapExactTokensForETH(srcQty, amountOutMin, path, msg.sender, now + 100000);
}

function tokenToToken(address[] memory path, uint srcQty, uint amountOutMin) internal returns (uint[] memory) {
  return uniswapV2.swapExactTokensForTokens(srcQty, amountOutMin, path, msg.sender, now + 100000);
}
```

Lastly, we need to implement the trade function to forward request to Uniswap contract and return response back to the the Vault:

```solidity
function trade(address[] memory path, uint amountOutMin) public payable returns (address, uint) {
  require(path.length >= 2, "Proxy: invalid path");
  uint256 swapAmount = msg.value > 0 ? msg.value : balanceOf(IERC20(path[0]));
  uint[] memory amounts;
  bool isSwapForNative = false;
  if (msg.value == 0) {
    // approve
    approve(IERC20(path[0]), address(uniswapV2), swapAmount);
    if (path[path.length - 1] != wETH) { // token to token.
      amounts = tokenToToken(path, swapAmount, amountOutMin);
    } else {
      amounts = tokenToEth(path, swapAmount, amountOutMin);
      isSwapForNative = true;
    }
  } else {
    amounts = ethToToken(path, swapAmount, amountOutMin);
  }
  require(amounts.length >= 2, "Proxy: invalid response values");
  require(amounts[amounts.length - 1] >= amountOutMin && amounts[0] == swapAmount);
  // ETH_CONTRACT_ADDRESS is a address present for eth native
  return (isSwapForNative ? address(ETH_CONTRACT_ADDRESS) : path[path.length - 1], amounts[amounts.length - 1]);
}
```

Note: the adapter must be stateless, variables in the adapter must be constants.

Now you are ready to execute the trade on Uniswap by having the Bridge to extract the swap instruction from Incognito blockchain and then submits it to Incognito Vault by using CreateOutChainSwapTx function, its full implementation can be found at: https://github.com/incognitochain/puniswap-tutorial/blob/main/bridge/create_evm_swap_tx.go

### Step 3:

After the swapped token is returned to Incognito Vault from Uniswap contract, the Bridge extracts a Reshield instruction (a.k.a Reshield event) emitted from the swap transaction and then submits it to Incognito blockchain to turn the swapped token into its privacy version.

![|410x357](https://incognito-discourse.s3-us-west-2.amazonaws.com/optimized/3X/b/d/bdea2914f0830a8745f29075d7f45751bfba9e97_2_410x357.png)

To extract a Reshield event emitted from the swap transaction, the Bridge needs to call GetProof function with the swap transaction’s hash (txhash argument) to get the proof that needs to be submitted to Incognito blockchain. Its full implementation can be found at: https://github.com/incognitochain/puniswap-tutorial/blob/main/bridge/get_redeposit_proof.go

In the bridge folder, we can use this command to try the above function:

```bash
go test -timeout 120s -run ^Test_GetProof$ bridge -v
```

The last thing is creating the reshield transaction to Incognito blockchain by calling SubmitProofTx function. Its full implementation can be found at: https://github.com/incognitochain/puniswap-tutorial/blob/6b97c0c48c8923675cfd50630f8d7309d59c4079/bridge/creat_reshield_tx.go#L8

After reshielded, the swapped token should be credited in user’s Incognito wallet.

That’s it! You have just completed the first privacy app for Uniswap. From now on, you can totally build your own privacy version of whatever dApp you desire by the same method. Feel free to ping us if you encounter any issue along the way.

Happy building!
