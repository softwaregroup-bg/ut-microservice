/** @type { import("ut-run").validationFactory } */
module.exports = ({
    joi
}) => ({
    'microservice.session.get'() {
        return {
            description: 'Session get',
            params: joi.object().keys({
                id: joi.number().integer(),
                data: joi.any
            }),
            result: joi.object().keys({
                id: joi.number().integer(),
                data: joi.any
            })
        };
    }
});
