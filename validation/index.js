module.exports = function validation() {
    return {
        'microservice.foo.get': () => require('./foo/get')
    };
};
