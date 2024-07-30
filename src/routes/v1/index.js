const express = require('express');
const { InfoController } = require('../../controllers');
const AirPlanRoutes = require('./airplaneRoutes')
const CityRoutes = require('./cityRoutes')
const AirPortRoutes = require('./airportRoutes')
const FlightRoute = require('./flightRoutes')

const router = express.Router();
router.get('/info', InfoController.info);

router.use('/airplanes', AirPlanRoutes);

router.use('/cities', CityRoutes);

router.use('/airports', AirPortRoutes);

router.use('/flights', FlightRoute)


module.exports = router;    