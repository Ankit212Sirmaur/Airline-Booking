const CrudRepository = require('./crud-repository');
const { Flight, Airplane, Airport, City } = require('../models')
// const { Sequelize} = require('sequelize');
const db = require('../models')
const {addRowLockOnFlights} = require('./rawQueries')

class FlightRepository extends CrudRepository {
    constructor() {
        super(Flight)
    }

    async getAllFlights(data, sort) {
        const response = await Flight.findAll({
            where: data,
            order: sort,
            include: [
                {
                    model: Airplane,
                    required: true, // outer join to inner join
                    as: 'airplaneDetail',
                },
                {
                    model: Airport,
                    required: true,
                    as: 'departureAirport',
                    on: {           // on the specific column
                        col1: Sequelize.where(Sequelize.col('Flight.departureAirportId'), "=", (Sequelize.col('departureAirport.code')))
                    },
                    include: {
                        model: City,
                        require: true,
                        as: 'cityDetail',
                    }
                },
                {
                    model: Airport,
                    required: true,
                    as: 'arrivalAirport',
                    on: {           // on the specific column
                        col1: Sequelize.where(Sequelize.col('Flight.departureAirportId'), "=", (Sequelize.col('arrivalAirport.code')))
                    },
                    include: {
                        model: City,
                        require: true,
                        as: 'cityDetail',
                    }
                }
            ]
        })
        return response;
    }

    async updateRemainingSeats(flightId, seats, dec=true) {
        await db.sequelize.query(addRowLockOnFlights(flightId));
        const flight = await Flight.findByPk(flightId);
        if (+dec) {
            await flight.decrement('totalSeats', { by: seats });
        } else {
            await flight.increment('totalSeats', { by: seats });
        }
        await flight.reload();
        return flight;
    }
}

module.exports = FlightRepository;