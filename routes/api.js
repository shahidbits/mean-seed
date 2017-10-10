/******************************************************************************
 *
 *  api.js - routes for API
 *
 *****************************************************************************/

var express = require('express');
var router = express.Router();

var User = require('../models/user.js');

var api = require('../dataservice/api');

/* SOCIETY API */
router.get('/', api.notImplemented);

module.exports = router;

/***********************************  END  ***********************************/