const debug = require("debug")("netmonitor:GrafanaJSONService.js");
const Joi = require("joi");
const fs = require("fs");
const constants = require("../../config/constants");
const winston = require("winston");
const logger = winston.loggers.get("logger");
const HttpStatusCodes = require("http-status-codes");
const GrafanaJSONRequestDTO = require("./GrafanaJSONRequestDTO");
const BFTTiming = require("../../models/bfttiming");
const Stat = require("../../models/stat");
const DBEndpoint = process.env.MONGO_DATABASE_URL;
const BFTTimingDB = new BFTTiming(DBEndpoint);
const StatDB = new Stat(DBEndpoint);
const moment = require("moment");
const util = require("util");
const TS = process.env.TIME_SLOT || 10;
console.log("TS",TS)
const { ERROR_CODES, validateInputSchema, responseError } = require("../../common/errors");

/**
 * Should return 200 ok. Used for "Test connection" on the datasource config page
 * @param req
 * @param res
 * @returns {Promise<{body: {errorCode: null, message: null}, statusCode: number}>}
 */
async function getIndex(req, res) {
    const responseDto = {
        statusCode: 200,
        body: {
            message: null,
            errorCode: null,
        },
    };

    responseDto.statusCode = 200;
    responseDto.body.message = "Ok";

    return responseDto;
}

async function searchData(req, res) {
    // Grafana expect result as an array of metrics
    const responseDto = {
        statusCode: 200,
        body: [],
    };

    const metricNames = constants.GRAFANA_CONFIG.GRAFANA_METRICS.map((metric) => {
        return metric.name;
    });

    responseDto.body = metricNames;

    responseDto.statusCode = 200;

    return responseDto;
}

async function queryData(req, res) {
    debug("queryData->req.body %o", req.body);
    // Grafana expect result as an array of metrics
    const responseDto = {
        statusCode: 200,
        body: [],
    };

    const requestDTO = validateInputSchema(req.body, GrafanaJSONRequestDTO.GrafanaTimeSeriesRequestDTO);

    const dataSeries = await _dataSeries(requestDTO);
    responseDto.body = dataSeries;

    responseDto.statusCode = 200;

    return responseDto;
}

async function getAnnotations(req, res) {
    // Grafana expect result as an array of metrics
    const responseDto = {
        statusCode: 200,
        body: [],
    };

    const series = require("./faked-datasource/series.json");
    const annotation = {
        name: "annotation name",
        enabled: true,
        datasource: "generic datasource",
        showLine: true,
    };

    const annotations = [
        {
            annotation: annotation,
            title: "Donlad trump is kinda funny",
            time: 1450754160000,
            text: "teeext",
            tags: "taaags",
        },
        { annotation: annotation, title: "Wow he really won", time: 1450754160000, text: "teeext", tags: "taaags" },
        { annotation: annotation, title: "When is the next ", time: 1450754160000, text: "teeext", tags: "taaags" },
    ];

    // responseDto.body = series.map(item => item.datapoints);
    responseDto.body = annotations;

    responseDto.statusCode = 200;

    return responseDto;
}

async function _dataSeries(grafanaDataQuery) {
    const firstMetricTarget = grafanaDataQuery?.targets[0];
    const additionalMetricTargetData = firstMetricTarget.data;

    const chainID = additionalMetricTargetData?.ChainID || 0;
    const getTX = additionalMetricTargetData?.getTX || 0;

    const rangeFromDate = moment(grafanaDataQuery?.range?.from);
    const rangeToDate = moment(grafanaDataQuery?.range?.to);

    debug("fetch from mongo");
    let info = {}
    let queryMetrics = [];
    if (getTX == 0) {
        console.log("getTX 00")
        info1 = BFTTimingDB.list(
            {
                ChainID: chainID,
                ProduceTime: {
                    $gt: rangeFromDate.unix() * 1000,
                    $lt: rangeToDate.unix() * 1000,
                },
            },
            null,
            null,
            {
                ProduceTime: 1,
            }
        );
        info2 = StatDB.list(
            {
                ChainID: chainID,
                ProduceTime: {
                    $gt: rangeFromDate.unix() * 1000,
                    $lt: rangeToDate.unix() * 1000,
                },
            },
            null,
            null,
            {
                ProduceTime: 1,
            }
        );
        let res =  await Promise.all([info1, info2])

        console.log("info.length", info.length)
        const GRAFANA_METRICS_DICT = constants.GRAFANA_CONFIG.GRAFANA_METRICS_DICT;
        const collectedMetricKeys = [GRAFANA_METRICS_DICT.bfttiming_produce, GRAFANA_METRICS_DICT.bfttiming_propose, GRAFANA_METRICS_DICT.bfttiming_majority, GRAFANA_METRICS_DICT.bfttiming_last];
        
        for (let collectedMetricKey of collectedMetricKeys) {
            queryMetrics.push({
                target: collectedMetricKey.name,
                datapoints: res[0].map((x) => {
                    return [x[collectedMetricKey.databaseMappingKey], (x.ProduceTime / 1000) * 1000];
                }),
            });
        }
        if (chainID == -1){
            for (let collectedMetricKey of [GRAFANA_METRICS_DICT.block_shard_state, GRAFANA_METRICS_DICT.block_inst]) {
                queryMetrics.push({
                    target: collectedMetricKey.name,
                    datapoints: res[1].map((x) => {
                        return [x[collectedMetricKey.databaseMappingKey], (x.ProduceTime / 1000) * 1000];
                    }),
                });
            }
        } else {
            for (let collectedMetricKey of [GRAFANA_METRICS_DICT.block_tx, GRAFANA_METRICS_DICT.block_cross_tx, GRAFANA_METRICS_DICT.block_inst]) {
                queryMetrics.push({
                    target: collectedMetricKey.name,
                    datapoints: res[1].map((x) => {
                        return [x[collectedMetricKey.databaseMappingKey], (x.ProduceTime / 1000) * 1000];
                    }),
                });
            }
        }
        
    } else {
        
        info = await StatDB.list(
            {
                ChainID: chainID,
                ProduceTime: {
                    $gt: rangeFromDate.unix() * 1000,
                    $lt: rangeToDate.unix() * 1000,
                },
            },
            null,
            null,
            {
                ProduceTime: 1,
            }
        );
        console.log("getTX 1")
        const GRAFANA_METRICS_DICT = constants.GRAFANA_CONFIG.GRAFANA_METRICS_DICT;
        let collectedMetricKeys = [GRAFANA_METRICS_DICT.block_tx, GRAFANA_METRICS_DICT.block_cross_tx, GRAFANA_METRICS_DICT.block_inst];
        if (chainID == -1) {
            collectedMetricKeys = [GRAFANA_METRICS_DICT.block_shard_state, GRAFANA_METRICS_DICT.block_inst];
        }
        
        for (let collectedMetricKey of collectedMetricKeys) {
            queryMetrics.push({
                target: collectedMetricKey.name,
                datapoints: info.map((x) => {
                    return [x[collectedMetricKey.databaseMappingKey], (x.ProduceTime / 1000) * 1000];
                }),
            });
        }
    }
    

    return queryMetrics;
}

function EmployerSystemService() {}

EmployerSystemService.prototype = {
    getIndex: getIndex,
    searchData: searchData,
    queryData: queryData,
    getAnnotations: getAnnotations,
};

module.exports = EmployerSystemService;
