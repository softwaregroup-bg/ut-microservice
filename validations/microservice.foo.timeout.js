/** @type { import("ut-run").validationFactory } */
module.exports = ({
    joi,
    lib: {
        fooResult
    }
}) => ({
    'microservice.foo.timeout'() {
        return {
            description: 'Foo timeout',
            auth: false,
            params: joi.object().keys({
                timeout: joi.number()
            }),
            result: joi.object().keys({
                timeout: joi.number()
            })
        };
    }
});
