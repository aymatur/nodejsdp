"use strict";

module.exports = function asyncDivision(divided, divisor, cb) {
    return new Promise((resolve, reject) => {
        process.nextTick(() => {
            const result = devided / divisor;
            if (isNaN(result) || !Number.isFinite(result)) {
                const error = new Error('Invalid operands');
                if (cb) { cb(error); }
                return reject(error);
            }

            if(cb) { cb(null, result); }
            resolve(result);
        });
    });
};