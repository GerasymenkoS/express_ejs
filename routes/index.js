'use strict';
const express = require('express');
const router = express.Router();

const controller =  require('../controllers/');

router.get('/', controller.getMainPage);

router.get('/:continent', controller.getContinentPage);

router.get('/:continent/:country',  controller.getCountryPage);


module.exports = router;