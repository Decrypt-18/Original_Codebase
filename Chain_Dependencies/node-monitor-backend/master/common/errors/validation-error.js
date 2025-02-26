const HttpStatusCodes = require('http-status-codes');
const ApiError = require('./api-error');

class ValidationError extends ApiError {

  constructor(code, message, originalError, httpStatusCode = HttpStatusCodes.UNPROCESSABLE_ENTITY) {
    super(code, message, originalError);
    this.httpStatusCode = httpStatusCode;
  }
}

module.exports = ValidationError;
