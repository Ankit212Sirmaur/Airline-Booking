const { StatusCodes } = require('http-status-codes');
const { errorResponse, successResponse } = require('../utils/common');
const { AirplaneService } = require('../services');
const { data, message } = require('../utils/common/errorResponse');

/**
 * POST: '/airplanes'
 * req-body : {modelNumber: " ", capacity: }
 */

async function CreateAirPlanes(req, res) {
    try {
        const response = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        })
        console.log('response', response);
        successResponse.message = 'created the airplane'
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
/**
 * GET: '/airplanes'
 * req-body : {}
 */
async function getAllAirPlane(req, res) {
    try {
        const response = await AirplaneService.getAirPlanes();
        successResponse.data = response
        return res
                .status(StatusCodes.OK)
                .json(successResponse)
    } catch (error) {
        errorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(errorResponse)

    }
}
/**
 * GET: '/airplanes/:id'
 * req-body : {}
 */
async function getAirPlane(req, res) {
    try {
        const response = await AirplaneService.getAirPlanesById(req.params.id);
        successResponse.data = response
        return res
                .status(StatusCodes.OK)
                .json(successResponse)
    } catch (error) {
        errorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(errorResponse)

    }
}
/**
 * delete: '/airplanes/:id'
 * req-body : {}
 */
async function destroyAirPlane(req, res){
    try {
        const response = await AirplaneService.destroyAirPlane(req.params.id);
        successResponse.data = response;
        return res
                .status(StatusCodes.OK)
                .json(successResponse)
    } catch (error) {
        errorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(errorResponse)
    }
}
/**
 * PATCH: '/airplanes/:id'
 * req-body : {capacity: 500}
 */
async function updateAirPlane(req, res) {
    try {

        const response = await AirplaneService.updateAirPlane(req.params.id, {
            capacity: req.body.capacity
        })
        successResponse.data = response;
        successResponse.message = 'Get the updated airplane with capacity'
        return res
            .status(StatusCodes.CREATED)
            .json(successResponse);
    } catch (error) {
        errorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(errorResponse)

    }
}

module.exports = {
    CreateAirPlanes,
    getAirPlane,
    getAllAirPlane,
    destroyAirPlane,
    updateAirPlane,
  }