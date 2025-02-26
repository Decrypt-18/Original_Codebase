const HttpStatusCodes = require('http-status-codes');
const ApiError = require('./api-error');

class ServiceUnavailableError extends ApiError {

  constructor(code, message, originalError, httpStatusCode = HttpStatusCodes.SERVICE_UNAVAILABLE) {
    super(code, message, originalError);
    this.httpStatusCode = httpStatusCode;
  }
}

module.exports = ServiceUnavailableError;
