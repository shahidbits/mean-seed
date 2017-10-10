/******************************************************************************
 *
 *  notify.js - NOTIFY service for Telkon
 *
 *****************************************************************************/

var io;

module.exports = {
    listen: listen
};


//////////


function listen(server) {
    io = require('socket.io')(server);

    io.sockets.on('connection', function (socket) {
        console.log('Notifier#connection');
    });

    io.sockets.on('disconnect', function (socket) {
        console.log('Notifier#disconnect');
    });

    io.sockets.on('reconnect', function (socket) {
        console.log('Notifier#reconnect');
    });
}

/***********************************  END  ***********************************/