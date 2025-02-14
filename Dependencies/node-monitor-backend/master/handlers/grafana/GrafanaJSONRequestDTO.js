const debug = require('debug')('yourfutPublicCountriesRequestDTO');
const Joi = require('joi');
const constants = require('../../config/constants');
const winston = require('winston');
const logger = winston.loggers.get('logger');

const dummyQuery = {
    "app": "dashboard",
    "requestId": "Q306",
    "timezone": "browser",
    "panelId": 10,
    "dashboardId": 8,
    "range": {
        "from": "2022-04-13T04:06:07.064Z",
        "to": "2022-04-14T04:06:07.064Z",
        "raw": {"from": "now-24h", "to": "now"}
    },
    "timeInfo": "",
    "interval": "5m",
    "intervalMs": 300000,
    "targets": [{
        "data": "{\n    \"ChainID\": 0\n}",
        "refId": "A",
        "target": "bfttiming",
        "type": "timeseries",
        "datasource": {"type": "simpod-json-datasource", "uid": "vB2vTXYGz"},
        "payload": ""
    }],
    "maxDataPoints": 382,
    "scopedVars": {"__interval": {"text": "5m", "value": "5m"}, "__interval_ms": {"text": "300000", "value": 300000}},
    "startTime": 1649909167064,
    "rangeRaw": {"from": "now-24h", "to": "now"},
    "adhocFilters": []
};

const AdhocFilterDTO = Joi.object()
    .keys({
        key: Joi.string()
            .optional(),
        operator: Joi.string()
            .optional(),
        value: Joi.string()
            .optional()
    });

const TargetDTO = Joi.object()
    .keys({
        target: Joi.string()
            .optional(),
        refId: Joi.string()
            .optional(),
        type: Joi.string()
            .optional()
            .allow("timeserie"),
        datasource: Joi.object()
            .optional(),
        // REF: https://github.com/simPod/GrafanaJsonDatasource
        data: Joi.object().optional()
    });

// TODO: filter range raw
const RangeRawDTO = Joi.object()
    .keys({
        from: Joi.string()
            .optional(),
        to: Joi.string()
            .optional(),
    });

// TODO: filter range by ISO time format
const RangeDTO = Joi.object()
    .keys({
        from: Joi.string()
            .optional(),
        to: Joi.string()
            .optional(),
        raw: RangeRawDTO
    });

const GrafanaTimeSeriesRequestDTO = Joi.object()
    .keys({
        app: Joi.string()
            .optional(),
        requestId: Joi.string()
            .optional(),
        panelId: Joi.number()
            .integer()
            .required(),
        range: RangeDTO
            .optional(),
        rangeRaw: RangeRawDTO
            .optional(),
        interval: Joi.string()
            .optional(),
        intervalMs: Joi.number()
            .integer()
            .min(1)
            .optional(),
        targets: Joi.array()
            .items(TargetDTO),
        adhocFilters: Joi.array()
            .items(AdhocFilterDTO),
        format: Joi.string()
            .optional()
            .allow('json', 'table'),
        maxDataPoints: Joi.number()
            .integer()
            .optional()
    })
    .options({stripUnknown: true});


module.exports = {
    GrafanaTimeSeriesRequestDTO: GrafanaTimeSeriesRequestDTO,
};
