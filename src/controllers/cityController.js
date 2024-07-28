const { StatusCodes } = require('http-status-codes');
const { errorResponse, successResponse } = require('../utils/common');
const {CityService} = require('../services');

/**
 * POST: '/airplanes'
 * req-body : {name: req.body.name }
 */
async function CreateCity(req, res) {
    try {
        const city = await CityService.createCity({
            name : req.body.name,
        })
        successResponse.message = 'created the City'
        successResponse.data = city;
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

async function DeleteCity(req, res){
    try {
        const city = await CityService.deleteCity(req.params.id);
        successResponse.message = "Deleted the City"
        successResponse.data = city;
        return res
                .status(StatusCodes.OK)
                .json(successResponse);
    } catch (error) {
        errorResponse.error = error;
        return res 
            .status(error.statusCode)
            .json(errorResponse);
    }
}

async function UpdateCity(req, res) {
    try {
        const city = await CityService.updateCity(req.params.id, {
            name: req.body.name,
        })
        successResponse.message = "Updated the City"
        successResponse.data = city;
        return res
                .status(StatusCodes.OK)
                .json(successResponse);
    } catch (error) {
        errorResponse.error = error;
        return res 
            .status(error.statusCode)
            .json(errorResponse);
    }
}
module.exports = {
    CreateCity,
    DeleteCity,
    UpdateCity,
    
}