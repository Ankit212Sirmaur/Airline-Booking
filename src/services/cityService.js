const { StatusCodes } = require('http-status-codes');
const {CityRepository} = require('../repositories'); 
const { AppError } = require('../utils/error/index');

const cityRepository = new CityRepository();

async function createCity(data) {
    try {
        const city = await cityRepository.create(data);
        return city;
    } catch (error) {
        if (error.name == 'SequelizeValidationError' || error.name == 'SequelizeUniqueConstraintError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create an airplane object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function deleteCity(data){
    try {
        const city = await cityRepository.destroy(data);
        return city;
    } catch (error) {
        if(error.statusCode === StatusCodes.NOT_FOUND){
            throw new AppError('The request city not found', error.statusCode);
        }
        throw new AppError('Cannot delete the city', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function updateCity(id, data) {
    try {
        const city = await cityRepository.update(id, data);
        const updatedCity = await cityRepository.get(id);
        return updatedCity;
    } catch (error) {
        if(error.statusCode === StatusCodes.NOT_FOUND){
            throw new AppError('The request city not found', error.statusCode);
        }
        throw new AppError('Cannot delete the city', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
module.exports = {
    createCity,
    deleteCity,
    updateCity,
}