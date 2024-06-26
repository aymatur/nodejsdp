"use strict";
const Chance = require('chance');
const chance = new Chance();

require('http').createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    while(chance.bool({likelihood: 95})) {
        res.write(chance.string() + '\n');
    }
    res.end('\nThe en...\n');
    res.on('finish', () => console.log('All data was sent'));
}).listen(8080, () => console.log('Listening on http://localhost:8080'));