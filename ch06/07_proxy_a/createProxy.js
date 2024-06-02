"use strict";

function createProxy(subject) {
    const proto = Object.getPrototypeOf(subject);
    function Proxy(subject) {
        this.subject = subject;
    }

    Proxy.prototype = Object.create(proto);
    Proxy.prototype.hello = function() {
        return this.subject.hello() + ' world';
    }

    Proxy.prototype.goodbye = function() {
        return this.subject.goodbye
            .apply(this.subject, arguments);
    }

    return new Proxy(subject);
}