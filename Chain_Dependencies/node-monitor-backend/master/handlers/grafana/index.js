const express = require('express');
const router = express.Router();
const winston = require('winston');
const logger = winston.loggers.get('logger');
const GrafanaJSONController = require('./GrafanaJSONController');

/**
 * Ref: https://github.com/grafana/simple-json-datasource
 * These routes are required by Grafana Simple JSON Datasource Plugin
 */
router.all('/', GrafanaJSONController.IndexHandler);
router.all('/search', GrafanaJSONController.SearchHandler);
router.all('/query', GrafanaJSONController.QueryHandler);
router.all('/annotations', GrafanaJSONController.AnnotationsHandler);

// These 2 routers are optional
router.all('/tag-keys', GrafanaJSONController.TagKeysHandler);
router.all('/tag-values', GrafanaJSONController.TagValuesHandler);

module.exports = router;
