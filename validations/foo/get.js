const joi = require('joi');

module.exports = {
    description: 'Foo get',
    params: joi.object().keys({
        fooId: joi.string().required() // use string, as JS does not have bigint
    }),
    result: joi.object().keys({
        fooId: joi.string().required(),
        fooCategoryId: joi.string(),
        name: joi.string().required().max(100)
    })
};
