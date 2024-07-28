const express = require('express');
const router = express.Router();
const {CityController} = require('../../controllers')

router.post('/', CityController.CreateCity)

module.exports = router;