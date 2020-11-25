module.exports = function validation() {
    return [
        require('./foo'),
        require('./microservice.foo.get'),
        require('./microservice.foo.fetch')
    ];
};
