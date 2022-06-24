module.exports = () => ({
    // environments
    common: {
        browser: true
    },
    storybook: {
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
