module.exports = ({joi}) => ({
    'microservice.foo.get'() {
        return {
            description: 'Foo get',
            params: joi.object().keys({
                fooId: joi.alternatives().try(
                    joi.number().integer().required(),
                    joi.string().regex(/^[0-9]{1,19}$/, 'numeric').required()
                )
            }),
            result: joi.object().keys({
                fooId: joi.alternatives().try(
                    joi.number().integer().required(),
                    joi.string().regex(/^[0-9]{1,19}$/, 'numeric').required()
                ),
                name: joi.string().required().max(200),
                code: joi.string().required().max(200),
                color: joi.string().required().max(50)
            })
        };
    }
});
