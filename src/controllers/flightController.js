const { StatusCodes } = require('http-status-codes');
const { errorResponse, successResponse } = require('../utils/common');
const { FlightService } = require('../services');
/**
 * POST: '/flights'
 * req-body : {modelNumber: " ", capacity: }
 */

async function CreateFlights(req, res) {
    try {
        console.log(req.body);
        const response = await FlightService.createFlights({
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price,
            boardingGate: req.body.boardingGate,
            totalSeats: req.body.totalSeats,
        })
        successResponse.message = 'created the Flight'
        successResponse.data = response;
        return res
            .status(StatusCodes.CREATED)
            .json(successResponse);
    } catch (error) {
        errorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(errorResponse);
    }

}

async function getAllFlights(req, res) {
    try {
        const response = await FlightService.getAllFlights(req.query)
        successResponse.message = 'get all the Flight'
        successResponse.data = response;
        return res
            .status(StatusCodes.CREATED)
            .json(successResponse);
    } catch (error) {
        errorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(errorResponse);
    }
}

async function getFlights(req, res) {
    try {
        const response = await FlightService.getFlight(req.params.id);
        successResponse.data = response;
        return res
            .status(StatusCodes.CREATED)
            .json(successResponse);
    } catch (error) {
        errorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(errorResponse);
    }
}

async function updateFlight(req, res) {
    console.log('req.params', req.params.flightId);
    
    try {
        const response = await FlightService.updateFlight(req.params.flightId, {
            seats: req.body.seats,
            dec: req.body.dec,
        })
        successResponse.data = response;
        successResponse.message = 'updated flight with remaining capacity'
        return res
            .status(StatusCodes.CREATED)
            .json(successResponse);
    } catch (error) {
        errorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(errorResponse);
    }

}
module.exports = {
    CreateFlights,
    getAllFlights,
    getFlights,
    updateFlight,
}