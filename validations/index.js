/** @type { import("ut-run").validationSet } */
module.exports = function validation() {
    return [
        require('ut-function.common-joi'),
        require('./bar'),
        require('./foo'),
        require('./microservice.bar.add'),
        require('./microservice.bar.delete'),
        require('./microservice.bar.edit'),
        require('./microservice.bar.fetch'),
        require('./microservice.bar.get'),
        require('./microservice.foo.fetch'),
        require('./microservice.foo.get'),
        require('./microservice.foo.process'),
        require('./microservice.session.delete'),
        require('./microservice.session.get'),
        require('./microservice.session.set')
    ];
};
