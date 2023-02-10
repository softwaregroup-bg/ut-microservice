/** @type { import("ut-run").validationFactory } */
module.exports = ({
    joi
}) => ({
    'microservice.session.delete'() {
        return {
            description: 'Session delete',
            params: joi.object().keys({
                id: joi.number().integer(),
                data: joi.any()
            }),
            result: joi.object().valid(null)
        };
    }
});
