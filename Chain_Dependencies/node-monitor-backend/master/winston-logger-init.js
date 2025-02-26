const winston = require('winston');
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, prettyPrint } = format;
const packageJSON = require('./package.json');
require('winston-daily-rotate-file');

const rotatingErrorTransport = new (winston.transports.DailyRotateFile)({
  filename: 'logs/error-%DATE%.log',
  datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
  level: 'error'
});

const rotatingCombinedTransport = new (winston.transports.DailyRotateFile)({
  filename: 'logs/app-%DATE%.log',
  datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d'
});

const consoleCombinedTransport = new winston.transports.Console({
  format: combine(
    timestamp(),
    // prettyPrint(),
    winston.format.prettyPrint(),
    winston.format.colorize(),
  ),
  colorize: true,
  level: 'debug',
  timestamp: true
});

winston.loggers.add('logger',{
  level: 'debug',
  json: false,
  staticMeta: {
    nodeEnv: process.env.NODE_ENV,
    currentEnv: process.env.CURRENT_ENV,
    appVersion: packageJSON.version
  },
  transports: [
    rotatingErrorTransport,
    rotatingCombinedTransport
  ]
});
const defaultLogger = winston.loggers.get('logger');

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
  const defaultLogger = winston.loggers.get('logger');
  defaultLogger.add(consoleCombinedTransport);
}

module.exports = defaultLogger;
