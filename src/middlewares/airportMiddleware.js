const { StatusCodes } = require('http-status-codes');
const { errorResponse, successResponse } = require('../utils/common');
const AppError = require('../utils/error/app-error');

function validateCreateRequest(req, res, next) {
    console.log('req.body', req.body);
    if (!req.body.name) {
        errorResponse.message = 'Something went wrong at the middleware'
        errorResponse.error = new AppError(['name not found'], StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(errorResponse)
    }
    if (!req.body.code) {
        errorResponse.message = 'Something went wrong at the middleware'
        errorResponse.error = new AppError(['code not found'], StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(errorResponse)
    }
    if (!req.body.city_id) {
        errorResponse.message = 'Something went wrong at the middleware'
        errorResponse.error = new AppError(['cityId not found'], StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(errorResponse)
    }
    next();
}

module.exports = {
    validateCreateRequest,
}