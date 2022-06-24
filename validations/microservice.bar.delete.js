/** @type { import("ut-run").validationFactory } */
module.exports = ({
    joi,
    lib: {
        barId,
        bar
    }
}) => ({
    'microservice.bar.delete'() {
        return {
            description: 'Bar delete',
            params: joi.object().keys({barId: joi.array().items(barId)}),
            result: joi.object().keys({
                bar: joi.array().items(bar.optional()).required()
            })
        };
    }
});
