/** @type { import("../../handlers").handlerFactory } */
module.exports = ({
    import: {
        'db/microservice.foo.fetch#[]': fetch
    }
}) => ({
    'microservice.foo.fetch': fetch
});
