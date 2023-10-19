/** @type { import("../../handlers").handlerSet } */
module.exports = function backend() {
    return [
        () => ({namespace: ['microservice']}),
        require('./microservice.foo.process').default
    ];
};
