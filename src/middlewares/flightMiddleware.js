const { StatusCodes } = require('http-status-codes');
const { errorResponse, successResponse } = require('../utils/common');
const AppError = require('../utils/error/app-error');

function validateCreateRequest(req, res, next) {
    if (!req.body.flightNumber) {
        errorResponse.message = "Something went wrong while creating Flight"
        errorResponse.error = new AppError(['Flight Number not found in the incoming request'], StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(errorResponse);
    }
    if (!req.body.airplaneId) {
        errorResponse.message = "Something went wrong while creating flight"
        errorResponse.error = new AppError(['Flight Number not found in the incoming request'], StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(errorResponse);
    }
    if (!req.body.arrivalAirportId) {
        errorResponse.message = "Something went wrong while creating flight"
        errorResponse.error = new AppError(['arrivalAirportId not found in the incoming request'], StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(errorResponse);
    }
    if (!req.body.departureAirportId) {
        errorResponse.message = "Something went wrong while creating flight"
        errorResponse.error = new AppError(['departureAirportId not found in the incoming request'], StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(errorResponse);
    }
    if (!req.body.price) {
        errorResponse.message = "Something went wrong while creating flight"
        errorResponse.error = new AppError(['Price not found in the incoming request'], StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(errorResponse);
    }
    if (!req.body.boardingGate) {
        errorResponse.message = "Something went wrong while creating flight"
        errorResponse.error = new AppError(['boardingGate not found in the incoming request'], StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(errorResponse);
    }
    if (!req.body.arrivalTime) {
        errorResponse.message = "Something went wrong while creating flight"
        errorResponse.error = new AppError(['arrivalTime not found in the incoming request'], StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(errorResponse);
    }
    if (!req.body.departureTime) {
        errorResponse.message = "Something went wrong while creating flight"
        errorResponse.error = new AppError(['departureTime not found in the incoming request'], StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(errorResponse);
    }
    next();
}

function validateUpdateSeatsRequest(req, res, next) {
    if (!req.body.seats) {
        errorResponse.message = "Something went wrong while updating Flight"
        errorResponse.error = new AppError(['seats Number not found in the incoming request'], StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(errorResponse);
    }
    next();
}
module.exports = {
    validateCreateRequest,
    validateUpdateSeatsRequest
}