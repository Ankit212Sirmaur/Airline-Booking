const CrudRepository = require('./crud-repository');
const { Flight } = require('../models')

class FlightRepository extends CrudRepository {
    constructor() {
        super(Flight)
    }

    async getAllFlights(data, sort){
        const response = await Flight.findAll({
            where: data,
            order: sort,
        })
        return response;
    }
}

module.exports = FlightRepository;