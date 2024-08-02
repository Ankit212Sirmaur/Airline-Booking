const express = require('express');
const router = express.Router();
const { FlightController } = require('../../controllers');
const { FlightMiddleware } = require('../../middlewares')

router.post('/', FlightMiddleware.validateCreateRequest, FlightController.CreateFlights)
router.get('/', FlightController.getAllFlights);
router.get('/:id', FlightController.getFlights);
router.patch('/:flightId/update',FlightMiddleware.validateUpdateSeatsRequest, FlightController.updateFlight);

module.exports = router;