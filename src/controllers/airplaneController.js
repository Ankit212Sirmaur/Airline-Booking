const { StatusCodes } = require('http-status-codes');
const { errorResponse, successResponse } = require('../utils/common');
const { AirplaneService } = require('../services');

async function CreateAirPlanes(req, res) {
    try {
        const response = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        })
        console.log('response', response);
        successResponse.data = response;
        return res
            .status(StatusCodes.CREATED)
            .json(successResponse);
    } catch (error) {
        errorResponse.error = error;
        // errorResponse.message = error.message;
        return res 
            .status(error.statusCode)
            .json(errorResponse);
    }
    
}

async function getAirpPlane(req, res) {
    try {
        const response = AirplaneService
    } catch (error) {
        
    }
}

module.exports = {
    CreateAirPlanes,
    getAirpPlane
  }