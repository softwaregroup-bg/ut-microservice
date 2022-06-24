/** @type { import("ut-run").validationFactory } */
module.exports = ({
    joi,
    lib: {
        barId,
        bar
    }
}) => ({
    'microservice.bar.get'() {
        return {
            description: 'Bar get',
            params: joi.object().keys({barId}),
            result: joi.object().keys({
                bar
            })
        };
    }
});
