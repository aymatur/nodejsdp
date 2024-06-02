"use strict";

const scientist = {
    name: 'nikola',
    surname: 'tesla'
};

const uppercaseScientist = new Proxy(scientist, {
    get: (target, property) => target[property].toUpperCase()
});

console.log(uppercaseScientist.name)
console.log(uppercaseScientist.surname);