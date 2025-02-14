const debug = require('debug')('netmonitor:GrafanaJSONController');
const winston = require('winston');
const logger = winston.loggers.get('logger');
const GrafanaJSONService = new (require('./GrafanaJSONService'));
const HttpStatusCodes = require('http-status-codes');

const {
    ERROR_CODES,
} = require('../../common/errors');


/**
 * Get country list
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
async function IndexHandler(req, res) {
    try {
        const responseDto = await GrafanaJSONService.getIndex(req, res);
        res.status(responseDto.statusCode);
        res.json(responseDto.body);
    } catch (err) {
        debug(err);
        logger.error('Error getting index handler', err);
        res.status(err.httpStatusCode || HttpStatusCodes.INTERNAL_SERVER_ERROR);
        res.json({
            errorCode: err.code || ERROR_CODES.INTERNAL_SERVER_ERROR,
            message: err.message
        })
    }
}


/**
 * Grafana JSON API Search Handler
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
async function SearchHandler(req, res) {
    try {
        const responseDto = await GrafanaJSONService.searchData(req, res);
        res.status(responseDto.statusCode);
        res.json(responseDto.body);
    } catch (err) {
        debug(err);
        logger.error('Error getting index handler', err);
        res.status(err.httpStatusCode || HttpStatusCodes.INTERNAL_SERVER_ERROR);
        res.json({
            errorCode: err.code || ERROR_CODES.INTERNAL_SERVER_ERROR,
            message: err.message
        })
    }
}


/**
 * Grafana JSON API Query Handler
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
async function QueryHandler(req, res) {
    try {
        const responseDto = await GrafanaJSONService.queryData(req, res);
        res.status(responseDto.statusCode);
        res.json(responseDto.body);
    } catch (err) {
        debug(err);
        logger.error('Error getting index handler', err);
        res.status(err.httpStatusCode || HttpStatusCodes.INTERNAL_SERVER_ERROR);
        res.json({
            errorCode: err.code || ERROR_CODES.INTERNAL_SERVER_ERROR,
            message: err.message
        })
    }
}


/**
 * Grafana JSON API Annotations Handler
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
async function AnnotationsHandler(req, res) {
    try {
        const responseDto = await GrafanaJSONService.getAnnotations(req, res);
        res.status(responseDto.statusCode);
        res.json(responseDto.body);
    } catch (err) {
        debug(err);
        logger.error('Error getting index handler', err);
        res.status(err.httpStatusCode || HttpStatusCodes.INTERNAL_SERVER_ERROR);
        res.json({
            errorCode: err.code || ERROR_CODES.INTERNAL_SERVER_ERROR,
            message: err.message
        })
    }
}


/**
 * Grafana JSON API Tag Keys Handler
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
async function TagKeysHandler(req, res) {
    try {
        const responseDto = await GrafanaJSONService.getIndex(req, res);
        res.status(responseDto.statusCode);
        res.json(responseDto.body);
    } catch (err) {
        debug(err);
        logger.error('Error getting index handler', err);
        res.status(err.httpStatusCode || HttpStatusCodes.INTERNAL_SERVER_ERROR);
        res.json({
            errorCode: err.code || ERROR_CODES.INTERNAL_SERVER_ERROR,
            message: err.message
        })
    }
}


/**
 * Grafana JSON API Tag Values Handler
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
async function TagValuesHandler(req, res) {
    try {
        const responseDto = await GrafanaJSONService.getIndex(req, res);
        res.status(responseDto.statusCode);
        res.json(responseDto.body);
    } catch (err) {
        debug(err);
        logger.error('Error getting index handler', err);
        res.status(err.httpStatusCode || HttpStatusCodes.INTERNAL_SERVER_ERROR);
        res.json({
            errorCode: err.code || ERROR_CODES.INTERNAL_SERVER_ERROR,
            message: err.message
        })
    }
}


module.exports = {
    IndexHandler,
    SearchHandler,
    QueryHandler,
    AnnotationsHandler,
    TagKeysHandler,
    TagValuesHandler,
};
