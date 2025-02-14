// @ts-ignore
import { Wallet } from 'incognito-chain-web-js/build/wallet';

function getRpcClient() {
  return Wallet.RpcClient;
}

export async function getMaxShardNumber() {
  const resp = await getRpcClient().getMaxShardNumber();
  return resp.shardNumber;
}
