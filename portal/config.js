module.exports = () => ({
    // environments
    storybook: {
        browser: true
    },
    validation: ({joi}) => joi.object()
});
