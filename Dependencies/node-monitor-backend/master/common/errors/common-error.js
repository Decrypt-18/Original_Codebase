const HttpStatusCodes = require('http-status-codes');
const ApiError = require('./api-error');
const ERROR_CODES = require('./error-codes');

class CommonError extends ApiError {

  constructor(code, message, httpStatusCode = HttpStatusCodes.UNPROCESSABLE_ENTITY) {
    super(code ? code : ERROR_CODES.COMMON_ERROR, message);
    this.httpStatusCode = httpStatusCode;
  }
}

module.exports = CommonError;
