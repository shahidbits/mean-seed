/******************************************************************************
 *
 *  device.js - data service for API
 *
 *****************************************************************************/

var User = require('../models/user.js');

module.exports = {
    notImplemented: notImplemented
};


////////////////////

/* NOT IMPLEMENTED ROUTES */
function notImplemented(req, res, next) {
    next(new Error(
        'Data service method for ' + req.method + ' ' + req.url + ' is not implemented'
    ));
}

/***********************************  END  ***********************************/