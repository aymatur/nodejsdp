"use strict";

function* twoWayGenerator() {
    try {
        const what = yield null;
        console.log('Hello ' + what);
    } catch (e) {
        console.error(e);
    }
}

const twoWay = twoWayGenerator();
twoWay.next();
twoWay.throw(new Error('passing error'));