const { StatusCodes } = require('http-status-codes');
const { errorResponse, successResponse } = require('../utils/common');
const AppError = require('../utils/error/app-error');

function validateCreateRequest(req, res, next){
    if(!req.body.name) {
        errorResponse.message = "Something went wrong while creating Airplane"
        errorResponse.error = new AppError(['City Name not found in the incoming request'], StatusCodes.BAD_REQUEST)
        return res  
                .status(StatusCodes.BAD_REQUEST)
                .json(errorResponse);
    }
    next();
}
module.exports = {
    validateCreateRequest,
}