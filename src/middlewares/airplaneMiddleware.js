const { StatusCodes } = require('http-status-codes');
const { errorResponse, successResponse } = require('../utils/common');
const AppError = require('../utils/error/app-error');

function validateCreateRequest(req, res, next) {
    if (!req.body.modelNumber) {
        errorResponse.message = 'Something went wrong at the middleware'
        errorResponse.error = new AppError(['Model Number not found'], StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(errorResponse)
    }
    next();
}

module.exports = {
    validateCreateRequest,
}