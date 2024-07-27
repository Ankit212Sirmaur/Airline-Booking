const express = require('express');
const router = express.Router();
const {AirPlaneController} = require('../../controllers');
const {AirPlaneMiddleware} = require('../../middlewares');

router.post('/',AirPlaneMiddleware.validateCreateRequest ,  AirPlaneController.CreateAirPlanes);
router.get('/', AirPlaneController.getAirpPlane);

module.exports = router;