const { StatusCodes } = require('http-status-codes');
const { FlightRepository } = require('../repositories');
const { AppError } = require('../utils/error/index');
const { Op, fn, col, where } = require('sequelize');
const moment = require('moment');

const flightRepository = new FlightRepository();

async function createFlights(data) {
    try {
        const flights = await flightRepository.create(data);
        return flights;
    } catch (error) {
        if (error.name == 'SequelizeValidationError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new flight object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAllFlights(query) {
    let customFilter = {};
    let sortFilter = [];
    let endTime = " 23:59:00"
    if (query.trips) {
        [departureAirportId, arrivalAirportId] = query.trips.split("-");
        customFilter.departureAirportId = departureAirportId;
        customFilter.arrivalAirportId = arrivalAirportId;
    }
    if (query.price) {
        [minPrice, maxPrice] = query.price.split('-');
        customFilter.price = {
            [Op.between]: [minPrice, ((maxPrice === undefined) ? 20000 : maxPrice)]
        }
    }
    if (query.traveller) {
        customFilter.totalSeats = {
            [Op.gte]: query.traveller,
        }
    }
    if (query.tripDate) {
        customFilter.departureTime = {
            [Op.between]: [query.tripDate, query.tripDate + endTime]
        }
    }
    if (query.sort) {
        const params = query.sort.split(',');
        const sortFilters = params.map((p) => p.split('_'));
        sortFilter = sortFilters;
    }
    console.log(customFilter, sortFilter);
    try {
        const flights = await flightRepository.getAllFlights(customFilter, sortFilter);
        return flights;
    } catch (error) {
        throw new AppError('Cannot fetch all the flights', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getFlight(id) {
    try {
        const flight = await flightRepository.get(id);
        return flight;
    } catch (error) {
        if(error.statusCode === StatusCodes.NOT_FOUND){
            throw new AppError('The request Flight not found', error.statusCode);
        }
        throw new AppError('Cannot fetch the details of Flight', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function updateFlight(flightId, data) {
    try {
        const response = await flightRepository.updateRemainingSeats(flightId, data.seats, data.dec);
        return response;
    } catch (error) {
        throw new AppError('Cannot fetch the details of Flight', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
module.exports = {
    createFlights,
    getAllFlights,
    getFlight,
    updateFlight
}