const express = require('express');
const router = express.Router();
const {AirPlaneController} = require('../../controllers');
const {AirPlaneMiddleware} = require('../../middlewares');

router.post('/',AirPlaneMiddleware.validateCreateRequest ,  AirPlaneController.CreateAirPlanes);
router.get('/', AirPlaneController.getAllAirPlane);
router.get('/:id', AirPlaneController.getAirPlane);
router.delete('/:id', AirPlaneController.destroyAirPlane);
router.patch('/:id', AirPlaneController.updateAirPlane)

module.exports = router;