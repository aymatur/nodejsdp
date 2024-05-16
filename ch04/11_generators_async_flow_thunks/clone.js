"use strict";

const fs = require('fs');
const path = require('path');

function asyncFlowWithThunks(generatorFunction) {
    function callback(err) {
        if(err) {
            return generatorFunction.throw(err);
        }
        const results = [].slice.call(arguments, 1);
        const thunk = generator.next(results.length > 1 ? results :
                                    results[0]).value;
        thunk && thunk(callback);
    }
    const generator = generatorFunction();
    const thunk = generator.next().value;
    thunk && thunk(callback);
}

const readFileThunk = (filename, options) => {
    return (cb) => {
      fs.readFile(filename, options, cb);
    }
};
  
const writeFileThunk = (filename, options) => {
    return (cb) => {
        fs.writeFile(filename, options, cb);
    }
};

asyncFlowWithThunks(function* () {
    const filename = path.basename(__filename);
    const myself = yield readFileThunk(__filename, 'utf8');
    yield writeFileThunk(`clone_of_${filename}`, myself);
    console.log("Clone created");
});