"use strict";

const creteFailsafeSocket = require('./failsafeSocket');
const failsafeSocket = creteFailsafeSocket({port: 5000});

setInterval(() => {
    failsafeSocket.send(process.memoryUsage());
}, 1000);