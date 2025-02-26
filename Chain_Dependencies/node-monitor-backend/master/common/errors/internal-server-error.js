const uuidv4 = require('uuid').v4;
const HttpStatusCodes = require('http-status-codes');
const ERROR_CODES = require('./error-codes');

class InternalServerError extends Error {

  constructor(message, originalError) {
    super(message);
    this.httpStatusCode = HttpStatusCodes.INTERNAL_SERVER_ERROR;
    this.code = ERROR_CODES.INTERNAL_SERVER_ERROR;
    this.originalError = originalError;
    if (this.originalError) { // for better logging because toJSON of Error will return empty
      this.originalError.toJSON = function () {
        return {
          message: originalError.message,
          stack: originalError.stack
        }
      };
    }
    this.errorId = uuidv4(); // this is just for tracking, so we don't need to make sure it's unique
  }

  toJSON() {
    return {
      errorCode: this.code,
      message: this.message
    };
  }
}

module.exports = InternalServerError;
