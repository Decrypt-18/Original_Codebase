const express = require('express');
const cors = require('cors');
const app = express();
const debug = require('debug')('incognito:cors');

const CORS_WHITELIST = process.env.CORS_WHITELIST || '';
const whitelist = CORS_WHITELIST.split(',');
debug('CORS white list', whitelist);

const corsOptions = {
  credentials: true,
  exposedHeaders: [
    'X-Powered-By',
    'X-REQUEST-ID',
  ]
};

if (whitelist && whitelist.length && whitelist[0] !== '*') {
  corsOptions.origin = function (origin, callback) {
    debug('Checking origin ', origin);
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
else {
  corsOptions.origin = '*';
}

function configCors(app) {
  app.use(cors(corsOptions));
}

module.exports = configCors;
