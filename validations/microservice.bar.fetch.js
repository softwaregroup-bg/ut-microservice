/** @type { import("ut-run").validationFactory } */
module.exports = ({
    joi,
    lib: {
        stringNull,
        bar,
        paging,
        pagination,
        orderBy
    }
}) => ({
    'microservice.bar.fetch'() {
        return {
            description: 'search bar objects',
            params: joi.object().keys({
                bar: joi.object().keys({
                    barName: stringNull.max(50),
                    barDescription: stringNull.max(255)
                }),
                paging,
                orderBy
            }),
            result: joi.object().keys({
                bar: joi.array().items(bar.optional()).required(),
                pagination
            })
        };
    }
});
