const {AppError} = require('../utils/error/index');
const { StatusCodes } = require('http-status-codes');
const { Logger } = require('../config');

class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        const response = await this.model.create(data);
        return response
    };

    async getAll() {
        const response = await this.model.findAll();
        return response;
    }

    async get(data) {
        const response = await this.model.findByPk(data);
        if(!response){
            Logger.error('Airplane not found');
            throw new AppError('Cannot find that airplanes', StatusCodes.NOT_FOUND)
        }
        return response;
    }

    async destroy(id) {
        const response = await this.model.destroy({
            where: {
                id: id,
            },
        });
        if(!response) {
            throw new AppError('AirPlane not found', StatusCodes.NOT_FOUND);
        }
        return response;
    }

   async update(id, data) {
    const response = await this.model.update(data, {
        where: { id: id },
    });
    if(!response) {
        throw new AppError('Not able to Update the airplane', StatusCodes.NOT_FOUND);
    }
    const updatedAirplane = await this.model.findByPk(id);
    if (!updatedAirplane) {
        throw new AppError('Error fetching updated airplane', StatusCodes.INTERNAL_SERVER_ERROR);
    }
    return updatedAirplane;
}

}

module.exports = CrudRepository;