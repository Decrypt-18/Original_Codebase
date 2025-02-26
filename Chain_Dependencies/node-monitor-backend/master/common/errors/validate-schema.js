const Joi = require('joi');
const ValidationError = require('./validation-error');
const ERROR_CODES = require('./error-codes');

module.exports = function(json, schema) {
  const { error, value } = schema.validate(json);
  if (error) {
    throw new ValidationError(ERROR_CODES.INVALID_SCHEMA, error.message, error);
  }
  return value;
};
