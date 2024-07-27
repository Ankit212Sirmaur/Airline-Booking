const AppError = require('../utils/error/index');
const { StatusCodes } = require('http-status-codes');
const {Logger} = require('../config');

class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        const response = await this.model.create(data);
        // Logger.error('Something Went wrong in Crud Repo : Create' );
        Logger.info('Successfully create the Airplanes');
        return response
    };

    async getAll(data) {
        const response = await this.model.findAll(data);
        if (!response) {
            Logger.error('Something Went wrong in Crud Repo : getAll' );
            throw new AppError('not able to find the resource', StatusCodes.NOT_FOUND);
        }
        Logger._read('Successfully Get Airplane Data');
        return response;
    }

    async get(data) {
        const response = await this.model.findByPk(data);
        if (!response) {
            Logger.error('Something Went wrong in Crud Repo : get' );
            throw new AppError('not able to find the resource', StatusCodes.NOT_FOUND);
        }
        Logger.info('Successfully get the Airplanes');
        return response;
    }

    async destroy(data) {
        const response = await this.model.destroy({
            where: {
                id: data,
            },
        });
        if (!response) {
            Logger.error('Something Went wrong in Crud Repo : destroy' );
            throw new AppError('not able to find the resource', StatusCodes.NOT_FOUND);
        }
        Logger.info('Successfully destroy the Airplanes');
        return response;
    }

    async update(data, id) {
        const response = await this.model.update(data, {
            where: {
                id: id,
            },
        });
        if (!response) {
            Logger.error('Something went wrong in Crud Repo : update' );
            throw new AppError('not able to find the resource', StatusCodes.NOT_FOUND);
        }
        Logger.info('Successfully Update the Airplanes');
        return response;
    }

}

module.exports =  CrudRepository;