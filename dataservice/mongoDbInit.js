/******************************************************************************
 *
 *  mongoDbInit.js - Initialize Mongo DB with Smaple Data
 *
 *****************************************************************************/

module.exports.load = load;

var async = require('async');

var User = require('../models/user.js');


//////////////////////

function load(callback) {
    callback();
    return;
}

/***********************************  END  ***********************************/