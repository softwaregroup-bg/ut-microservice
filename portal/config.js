export default () => ({
    // environments
    common: {
        browser: true
    },
    mock: {
        backend: {
            mock: true
        }
    },
    validation: ({joi}) => joi.object({
        browser: joi.boolean(),
        backend: joi.object({
            mock: joi.boolean()
        })
    })
});
