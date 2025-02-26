const csurf = require('csurf');
const winston = require('winston');
const logger = winston.loggers.get('logger');

const csrfProtection = csurf({cookie: false});

module.exports = {
  csrfProtection
};
