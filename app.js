/******************************************************************************
 *
 *  app.js - Main application file
 *
 *****************************************************************************/


/* Get the tools */
var express = require('express');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var path = require('path');
var fs = require('fs');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var serveStatic = require('serve-static');
var apiRoutes = require('./routes/api');
var app = express();
var request = require('request');
require('dotenv').config();

/* Set the Configuration */
var DB_URI = process.env.DB_URI;
var DB_NAME = process.env.DB_NAME;

/* Set up middlewares */
app.use(logger('dev'));   // Must be included for telkonlogger
app.use(session({
    secret: '1234',
    store: new MongoStore({
        uri: DB_URI,
        db: DB_NAME,
        autoRemove: 'interval',
        autoRemoveInterval: 60 // In minutes
    }),
    resave: true,
    saveUninitialized: false
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(serveStatic(path.join(__dirname, 'public')));

app.use('/v1/api', apiRoutes);

/* Catch 404 and forward to error handler */
app.use(function (req, res, next) {
    console.log('404');
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/* No stack traces leaked to user */
app.use(function (err, req, res, next) {

    console.log('err');
    console.log(err);
    res.status(err.status || 500)
        .send({
            status: 'dif',
            message: err.message
        });
    telkonlogger.logErr(req, res, err.message);
});

module.exports = app;

/***********************************  END  ***********************************/
