const Joi = require('joi');
const constants = require('../../config/constants');
const winston = require('winston');
const logger = winston.loggers.get('logger');

const GetStatesByCountryRequestDTO = Joi.object()
    .keys({
        countryCode: Joi.string()
            .length(2)
            .required()
            .error(new Error("param countryCode must be 2 characters ISO2 code")),
    })
    .options({stripUnknown: true});


module.exports = {
    GetStatesByCountryRequestDTO: GetStatesByCountryRequestDTO,
};
