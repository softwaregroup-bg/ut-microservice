// @ts-check
/** @type { import("ut-run").validationFactory } */
module.exports = ({
    joi,
    lib: {
        fooId,
        fooResult
    }
}) => ({
    'microservice.foo.get'() {
        return {
            description: 'Foo get',
            params: joi.object().keys({fooId}),
            result: fooResult
        };
    }
});
