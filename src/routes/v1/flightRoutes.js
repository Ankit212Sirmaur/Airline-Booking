const express = require('express');
const router = express.Router();
const { FlightController } = require('../../controllers');
const { FlightMiddleware } = require('../../middlewares')

router.post('/', FlightMiddleware.validateCreateRequest, FlightController.CreateFlights)
router.get('/', FlightController.getAllFlights);

module.exports = router;