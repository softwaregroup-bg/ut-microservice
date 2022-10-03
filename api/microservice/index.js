/** @type { import("../../handlers").handlerSet } */
module.exports = function foo() {
    return [
        require('../lib/css'),
        require('./example.error.transform'),
        require('./example.parking.pay'),
        require('./example.request.receive'),
        require('./microservice.session'),
        require('./microservice.document.add'),
        require('./microservice.foo.fetch'),
        require('./microservice.foo.get'),
        require('./microservice.foo.process')
    ];
};
