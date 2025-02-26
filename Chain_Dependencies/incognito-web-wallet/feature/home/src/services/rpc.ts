// @ts-ignore
import { Wallet } from 'incognito-chain-web-js/build/wallet';

function getRpcClient() {
  return Wallet.RpcClient;
}

export async function getMaxShardNumber() {
  let resp;
  try {
    resp = await getRpcClient().getMaxShardNumber();
  } catch (e) {
    throw e;
  }

  return resp.shardNumber;
}
