module.exports = () => function utStandard() {
    return {
        browser: () => [
            function ui() {
                return require('./ui/react').ui(...arguments);
            }
        ]
    };
};
