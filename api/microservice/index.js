// @ts-check
/** @type { import("../../handlers").handlerSet } */
module.exports = function foo() {
    return [
        require('../lib/css'),
        require('./example.error.transform'),
        require('./example.parking.pay'),
        require('./microservice.foo.fetch'),
        require('./microservice.foo.get'),
        require('./microservice.foo.process')
    ];
};
