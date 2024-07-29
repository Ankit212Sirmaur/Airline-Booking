const express = require('express');
const router = express.Router();
const {CityController} = require('../../controllers')
const {CityMiddleware} = require('../../middlewares')

router.post('/', CityMiddleware.validateCreateRequest, CityController.CreateCity)
router.delete('/:id', CityController.DeleteCity)
router.patch('/:id', CityController.UpdateCity),
router.get('/:id', CityController.getCity);
router.get('/', CityController.getAllCity);

module.exports = router;