const HttpStatusCodes = require('http-status-codes');
const ApiError = require('./api-error');

class NotFoundError extends ApiError {

  constructor(code, message, httpStatusCode = HttpStatusCodes.NOT_FOUND) {
    super(code, message);
    this.httpStatusCode = httpStatusCode;
  }
}

module.exports = NotFoundError;
