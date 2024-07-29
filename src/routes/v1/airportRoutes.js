const express = require('express');
const router = express.Router();
const {AirPortController} = require('../../controllers')
const {AirPortMiddleware} = require('../../middlewares')

router.post('/',AirPortMiddleware.validateCreateRequest, AirPortController.CreateAirPort);
router.get('/:id', AirPortController.getAirPort);
router.get('/all', AirPortController.getAllAirPort);
router.delete('/', AirPortController.destroyAirPort);

module.exports = router;