const HttpStatusCodes = require('http-status-codes');
const ApiError = require('./api-error');

class BadRequestError extends ApiError {

  constructor(code, message, httpStatusCode = HttpStatusCodes.BAD_REQUEST) {
    super(code, message);
    this.httpStatusCode = httpStatusCode;
  }
}

module.exports = BadRequestError;
