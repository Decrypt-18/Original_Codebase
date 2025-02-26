const ApiError = require('./api-error');
const InternalServerError = require('./internal-server-error');

module.exports = ({ err, res, logger }, apiMessage) => {
  if (err instanceof ApiError) {
    logger.error(apiMessage, err);
    return res.status(err.httpStatusCode).send(err);
  }
  const error = new InternalServerError(apiMessage, err);
  logger.error(apiMessage, error);
  return res.status(error.httpStatusCode).send(error);
};
