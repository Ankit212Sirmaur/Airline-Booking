const CrudRepository = require('./crud-repository');
const { Airport } = require('../models')

class AirPortRepository extends CrudRepository {
    constructor() {
        super(Airport)
    }
}

module.exports = AirPortRepository;