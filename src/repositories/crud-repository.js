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

    async destroy(data) {
        const response = await this.model.destroy({
            where: {
                id: data,
            },
        });
        if(!response) {
            throw new AppError('AirPlane not found', StatusCodes.NOT_FOUND);
        }
        return response;
    }

    async update(data, id) {
        const response = await this.model.update(data, {
            where: {
                id: id,
            },
        });
        return response;
    }

}

module.exports = CrudRepository;