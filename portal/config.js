module.exports = () => ({
    // environments
    storybook: {
        browser: true,
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
