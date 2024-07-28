const express = require('express');
const router = express.Router();
const {CityController} = require('../../controllers')
const {CityMiddleware} = require('../../middlewares')

router.post('/', CityMiddleware.validateCreateRequest, CityController.CreateCity)
router.delete('/:id', CityController.DeleteCity)
router.patch('/:id', CityController.UpdateCity)

module.exports = router;