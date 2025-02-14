const HttpStatusCodes = require('http-status-codes');
const ApiError = require('./api-error');

class InvalidTokenError extends ApiError {

  constructor(code, message, httpStatusCode = HttpStatusCodes.UNAUTHORIZED) {
    super(code, message);
    this.httpStatusCode = httpStatusCode;
  }
}

module.exports = InvalidTokenError;
