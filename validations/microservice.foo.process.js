/** @type { import("ut-run").validationFactory } */
module.exports = ({
    joi,
    lib: {
        fooId
    }
}) => ({
    'microservice.foo.process'() {
        return {
            description: 'Foo process',
            params: joi.object().keys({fooId}),
            result: joi.string()
        };
    }
});
