const HttpStatusCodes = require('http-status-codes');
const uuidv4 = require('uuid').v4;

class ApiError extends Error {

  constructor(code, message, originalError) {
    super(message ? message : code);
    this.code = code;
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
    this.httpStatusCode = HttpStatusCodes.INTERNAL_SERVER_ERROR; // should be override in sub type
  }

  toJSON() {
    return {
      errorCode: this.code,
      message: this.message
    };
  }
}

module.exports = ApiError;
