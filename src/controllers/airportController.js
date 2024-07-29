const { StatusCodes } = require('http-status-codes');
const { errorResponse, successResponse } = require('../utils/common');
const { AirportService } = require('../services');
/**
 * POST: '/airports'
 * req-body : {name: req.body.name,
            code: req.body.code,
            address: req.body.address,
            cityId: req.body, cityId }
 */

async function CreateAirPort(req, res) {
    try {
        const response = await AirportService.createAirport({
            name: req.body.name,
            code: req.body.code,
            address: req.body.address,
            city_id: req.body.city_id
        })
        successResponse.message = 'created the Airport'
        successResponse.data = response;
        return res
            .status(StatusCodes.CREATED)
            .json(successResponse);
    } catch (error) {
        console.log('error', error);
        errorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(errorResponse);
    }

}
/**
 * GET: '/airports'
 * req-body : {}
 */
async function getAllAirPort(req, res) {
    try {
        const response = await AirportService.getAirPort();
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
async function getAirPort(req, res) {
    try {
        const response = await AirportService.getAirPortById(req.params.id);
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
async function destroyAirPort(req, res) {
    try {
        const response = await AirportService.destroyAirPort(req.params.id);
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
 * PATCH: '/airports/:id'
 * req.params.id, => url
 * req-body :{name: req.body.name,
            code: req.body.code,
            address: req.body.address,
            cityId: req.body, cityId }
 */
async function updateAirPort(req, res) {
    try {

        const response = await AirportService.updateAirPlane(req.params.id, {
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
    CreateAirPort,
    getAirPort,
    getAllAirPort,
    destroyAirPort,
}