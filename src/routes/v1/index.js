const express = require('express');
const { InfoController } = require('../../controllers');
const AirPlanRoutes = require('./airplaneRoutes')

const router = express.Router();

router.use('/airplanes', AirPlanRoutes);

router.get('/info', InfoController.info);

module.exports = router;    