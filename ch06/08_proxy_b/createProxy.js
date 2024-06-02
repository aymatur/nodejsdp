"use strict";

function createProxy(subject) {
    return {
        hello: () => (subject.hello() + 'world!'),
        goodbye: () => (subject.goodbye.apply(subject, arguments))
    };
}