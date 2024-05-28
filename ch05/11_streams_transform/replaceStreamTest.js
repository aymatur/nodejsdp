"use strict";

const ReplaceSteam = require('./replaceStream');
const rs = new ReplaceSteam('World', 'Node.js');

rs.on('data', chunk => console.log(chunk.toString()));

rs.write('Hello W');
rs.write('orld!');
rs.end();