/** @type { import("ut-run").validationSet } */
module.exports = function validation() {
    return [
        require('./foo'),
        require('./microservice.foo.get'),
        require('./microservice.foo.fetch'),
        require('./microservice.foo.process'),
        require('./microservice.session.delete'),
        require('./microservice.session.get'),
        require('./microservice.session.set')
    ];
};
