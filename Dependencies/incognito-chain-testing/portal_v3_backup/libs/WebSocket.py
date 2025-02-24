import json

from websocket import create_connection

from libs.AutoLog import INFO, DEBUG, ERROR


class WebSocket():
    def __init__(self, ip, ws):
        self.url = "ws://" + ip + ":" + str(ws) + "/"
        self.timeout = 180  # default 180
        self.ws_conn = create_connection(self.url, self.timeout)

    def createConnection(self):
        if not self.ws_conn:
            ERROR("FAILED to establish ws connection: " + self.url)
            ERROR(str(self.ws_conn))
            return False
        DEBUG("SUCCEED to establish ws connection: " + self.url)
        return True

    def subcribeNewShardBlock(self):
        data = {"request": {"jsonrpc": "1.0", "method": "subcribenewshardblock", "params": [0], "id": 1},
                "subcription": "11", "type": 0, }
        self.ws_conn.send(json.dumps(data))
        INFO("Sent subcribenewshardblock")
        print("Receiving...")
        result = self.ws_conn.recv()
        print("Received '%s'" % result)
        return True

    def subcribePendingTransaction(self, txid):
        data = {"request": {"jsonrpc": "1.0", "method": "subcribependingtransaction", "params": [txid], "id": 1},
                "subcription": "11", "type": 0, }
        self.ws_conn.send(json.dumps(data))
        INFO("Sent subcribependingtransaction: " + txid)
        DEBUG("Receiving...")
        result = self.ws_conn.recv()
        res_json = json.loads(result)
        DEBUG("Received '%s'" % res_json)
        tx_fee = res_json['Result']['Result']['Fee']
        shard = res_json['Result']['Result']['ShardID']
        block = res_json['Result']['Result']['BlockHeight']

        INFO("Block: %d - Shard: %d - Fee: %d" % (block, shard, tx_fee))
        return block, shard, tx_fee

    def subcribeCrossOutputCoinByPrivatekey(self, privatekey):
        data = {"request": {"jsonrpc": "1.0", "method": "subcribecrossoutputcoinbyprivatekey", "params": [privatekey],
                            "id": 1}, "subcription": "11", "type": 0, }
        self.ws_conn.send(json.dumps(data))
        print("Sent subcribeCrossOutputCoinByPrivatekey: " + privatekey)
        print("Receiving...")
        result = self.ws_conn.recv()
        res_json = json.loads(result)
        DEBUG("Received '%s'" % res_json)
        SenderShardID = res_json['Result']['Result']["SenderShardID"]
        ReceiverShardID = res_json['Result']['Result']["ReceiverShardID"]
        BlockHeight = res_json['Result']['Result']["BlockHeight"]
        INFO(
            "SenderShardID: %d - ReceiverShardID: %d - BlockHeight: %d" % (SenderShardID, ReceiverShardID, BlockHeight))
        return True


    def subcribeCrossCustomTokenPrivacyByPrivatekey(self, privatekey):
        data = {"request": {"jsonrpc": "1.0", "method": "subcribecrosscustomtokenprivacybyprivatekey",
                            "params": [privatekey],
                            "id": 1}, "subcription": "11", "type": 0, }
        self.ws_conn.send(json.dumps(data))
        print("Sent subcribeCrossCustomTokenPrivacyByPrivatekey: " + privatekey)
        print("Receiving...")
        result = self.ws_conn.recv()
        res_json = json.loads(result)
        DEBUG("Received '%s'" % res_json)
        SenderShardID = res_json['Result']['Result']["SenderShardID"]
        ReceiverShardID = res_json['Result']['Result']["ReceiverShardID"]
        BlockHeight = res_json['Result']['Result']["BlockHeight"]
        TokenID = res_json['Result']['Result']["TokenID"]
        INFO("SenderShardID: %d - ReceiverShardID: %d - BlockHeight: %d - TokenID: %s"
             % (SenderShardID, ReceiverShardID, BlockHeight, TokenID))
        return True

    def closeConnection(self):
        self.ws_conn.close()
        DEBUG(self.url + " connection closed")
