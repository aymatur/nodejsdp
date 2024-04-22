"use strict";

const fs = require('fs');
function loadModule(filename, module, require) {
    const wrappedSrc =`(function(module, exports, require) {
        ${fs.readFileSync(filename, 'utf8')}
    }) (module, module.exports, require);`;
    eval(wrappedSrc);
}

let originalRequire = require;

const requireMine = (moduleName) => {
    console.log(`RequireMine invoked for module: ${moduleName}`);
    const id = requireMine.resolve(moduleName);
    if (requireMine.cache[id]) {
        return requireMine.cache[id].exports;
    }

    const module = {
        exports: {},
        id: id
    };
    requireMine.cache[id] = module;
    
    loadModule(id, module, requireMine);

    return module.exports;
};

requireMine.cache = {};
requireMine.resolve = (moduleName) => {
    return originalRequire.resolve(moduleName);
}

requireMine(process.argv[2]);
