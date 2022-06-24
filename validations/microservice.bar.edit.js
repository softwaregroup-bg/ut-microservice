/** @type { import("ut-run").validationFactory } */
module.exports = ({
    joi,
    lib: {
        bar
    }
}) => ({
    'microservice.bar.edit': () => ({
        description: 'add existing bar object',
        params: joi.object().keys({
            bar
        }).required(),
        result: joi.object().keys({
            bar
        }).required()
    })
});
