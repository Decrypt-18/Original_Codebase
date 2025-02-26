var redis = require("redis");

var Redis = function (url, db) {
    var redis_client = redis.createClient({ url: url || "" });
    redis_client.select(db || 0, function () {});
    redis_client.on("connect", function () {
        console.log("Connected to Redis");
    });
    this.redisClient = redis_client;
};

Redis.prototype.set = async function (key, value, expire) {
    this.redisClient.set(key, value || "");
    if (typeof expire != "undefined") this.redisClient.expire(key, expire);
};

Redis.prototype.expire = function (key, expire) {
    this.redisClient.expire(key, expire);
};

Redis.prototype.get = async function (key) {
    var self = this;
    return new Promise(function (resolve) {
        self.redisClient.get(key, function (err, stdout) {
            resolve(stdout);
        });
    });
};

Redis.prototype.ttl = async function (key) {
    var self = this;
    return new Promise(function (resolve) {
        self.redisClient.ttl(key, function (err, stdout) {
            resolve(stdout);
        });
    });
};

Redis.prototype.getset = async function (key, value) {
    var self = this;
    return new Promise(function (resolve) {
        self.redisClient.getset(key, value, function (err, stdout) {
            resolve(stdout);
        });
    });
};

Redis.prototype.hset = async function (key, field, value, expire) {
    this.redisClient.hset(key, field, value);
    if (expire) this.redisClient.expire(key, expire);
};

Redis.prototype.hgetall = async function (key) {
    var self = this;
    return new Promise(function (resolve) {
        self.redisClient.hgetall(key, function (err, stdout) {
            resolve(stdout);
        });
    });
};

Redis.prototype.hget = async function (key, field) {
    var self = this;
    return new Promise(function (resolve) {
        self.redisClient.hget(key, field, function (err, stdout) {
            resolve(stdout);
        });
    });
};

Redis.prototype.hkeys = async function (key) {
    var self = this;
    return new Promise(function (resolve) {
        self.redisClient.hkeys(key, function (err, stdout) {
            resolve(stdout);
        });
    });
};

exports = module.exports = Redis;
