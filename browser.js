module.exports = () => function utMicroservice() {
    return {
        browser: () => [
            function ui() {
                return require('./ui/react').ui(...arguments);
            }
        ]
    };
};
