exports = module.exports = function (router) {
    router.get("/bfttiming/dataSeries", require("./handlers/bfttiming").dataSeries);
    router.get("/bfttiming/summary", require("./handlers/bfttiming").summary);
    router.get("/bftproducing/forkEvent", require("./handlers/bftproducing").forkEvent);

    router.post("/pubkeystat/sync", require("./handlers/pubkeystat").sync);
    router.post("/pubkeystat/stat", require("./handlers/pubkeystat").stat);
    router.get("/pubkeystat/reward", require("./handlers/pubkeystat").reward);
    router.post("/pubkeystat/committee", require("./handlers/pubkeystat").committee);

    router.get("/validator/redlist", require("./handlers/validator").redlist);

    router.get("/event-stat", require("./handlers/event-stat"));
    router.get("/histogram", require("./handlers/histogram"));
    router.get("/lastStakeTx", require("./handlers/lastStakeTx"));
    router.use("/grafana", require("./handlers/grafana"));

    router.all("*", function (req, res) {
        console.log("Not found: %s %s", req.method, req.url);
        res.status("404").end();
    });
};
