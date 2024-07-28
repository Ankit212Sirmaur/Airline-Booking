const express = require('express');
const { InfoController } = require('../../controllers');
const AirPlanRoutes = require('./airplaneRoutes')
const CityRoutes = require('./cityRoutes')

const router = express.Router();
router.get('/info', InfoController.info);

router.use('/airplanes', AirPlanRoutes);

router.use('/cities', CityRoutes);

module.exports = router;    