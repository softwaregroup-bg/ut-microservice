/** @type { import("ut-run").validationFactory } */
module.exports = ({
    joi,
    lib: {
        bar,
        bigintNull
    }
}) => ({
    'microservice.bar.add': () => ({
        description: 'add new bar',
        params: joi.object().keys({
            bar: bar.keys({
                barId: bigintNull
            })
        }).required(),
        result: joi.object().keys({
            bar
        }).required()
    })
});
