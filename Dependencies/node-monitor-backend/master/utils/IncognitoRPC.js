const jayson = require("jayson");
const { result } = require("lodash");

class IncognitoClient {
    constructor(host, port) {
        if (!port){
            console.log("client https",host)
            this.client = jayson.client.https("https://"+host);
            return
        } 
        this.client = jayson.client.http({
            host: host,
            port: port,
        });
    }

    async request(method, ...param) {
        return new Promise((resolve, reject) => {
            this.client.request(method, param, function (err, response) {
                if (err) {
                    // console.log(err)
                    reject(err);
                } else {
                    if (response.Error) reject(response.Error);
                    resolve(response.Result);
                }
            });
        });
    }

    async GetBeaconBestState() {
        return this.request("getbeaconbeststate");
    }

    async GetBeaconBlockByHeight(height) {
        return this.request("retrievebeaconblockbyheight", height);
    }

    async GetBeaconViewByHash(hash) {
        return this.request("getbeaconviewbyhash",hash);
    }

    async GetShardBestState(sid) {
        return this.request("getshardbeststate",sid);
    }

    async GetNetworkInfo() {
        return this.request("getnetworkinfo");
    }

    async GetBlockChainInfo() {
        return this.request("getblockchaininfo");
    }
}
exports = module.exports = IncognitoClient;
