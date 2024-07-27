const { StatusCodes } = require('http-status-codes');
const AirplaneRepository = require('../repositories/airplane-repository'); 
const { AppError } = require('../utils/error/index');

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;
    } catch (error) {
        if (error.name == 'SequelizeValidationError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create an airplane object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirPlanes(){
    try {
        const response = await airplaneRepository.getAll();
        return response; 
    } catch (error) {
        throw new AppError('Cannot fetch the Airplanes', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function getAirPlanesById(id){
    try {
        const response = await airplaneRepository.get(id);
        return response; 
    } catch (error) {
        if(error.statusCode === StatusCodes.NOT_FOUND){
            throw new AppError('The request Airplanes not foound', error.statusCode);
        }
        throw new AppError('Cannot fetch the Airplanes', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function destroyAirPlane(id){
    try {
        const response = await airplaneRepository.destroy(id);
        return response;
    } catch (error) {
        if(error.statusCode === StatusCodes.NOT_FOUND){
            throw new AppError('The request Airplanes not foound', error.statusCode);
        }
        throw new AppError('Cannot fetch the Airplanes', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
module.exports = {
    createAirplane,
    getAirPlanes,
    getAirPlanesById,
    destroyAirPlane,
}