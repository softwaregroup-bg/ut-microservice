module.exports = ({
    joi,
    lib: {
        fooResult
    }
}) => ({
    'microservice.foo.fetch'() {
        return {
            description: 'Foo search',
            params: joi.object().keys({
                color: joi.string().max(50)
            }),
            result: joi.array().items(fooResult)
        };
    }
});
