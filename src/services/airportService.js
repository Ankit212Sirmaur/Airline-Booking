const { StatusCodes } = require('http-status-codes');
const {AirportRepository} = require('../repositories'); 
const { AppError } = require('../utils/error/index');

const airportRepository = new AirportRepository();

async function createAirport(data) {
    try {
        const airport = await airportRepository.create(data);
        return airport;
    } catch (error) {
        console.log('error at service', error);
        if (error.name == 'SequelizeValidationError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create an airport object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirPort(){
    try {
        const airport = await airportRepository.getAll();
        return airport; 
    } catch (error) {
        throw new AppError('Cannot fetch the airport', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function getAirPortById(id){
    try {
        const airport = await airportRepository.get(id);
        return airport; 
    } catch (error) {
        if(error.statusCode === StatusCodes.NOT_FOUND){
            throw new AppError('The request Airport not found', error.statusCode);
        }
        throw new AppError('Cannot fetch the Airport', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function destroyAirPort(id){
    try {
        const airport = await airportRepository.destroy(id);
        return airport;
    } catch (error) {
        if(error.statusCode === StatusCodes.NOT_FOUND){
            throw new AppError('The request Airport not found', error.statusCode);
        }
        throw new AppError('Cannot delete the Airport', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

module.exports = {
    createAirport,
    getAirPort,
    getAirPortById,
    destroyAirPort,
}