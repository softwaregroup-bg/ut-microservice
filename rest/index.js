const { join } = require('path');

module.exports = require('ut-run').microservice(module, require, () => function utMicroservice() {
    return {
        config: () => ({
            dev: {orchestrator: true, gateway: true},
            validation: ({joi}) => joi.any()
        }),
        orchestrator: () => [
            function rest() {
                return require('ut-function.dispatch')({
                    'demo.method'({param1}) {
                        return {
                            time: param1 + ' ' + new Date().toISOString()
                        };
                    }
                })(...arguments);
            }
        ],
        gateway: () => [
            function openApi() {
                return {
                    demo: join(__dirname, 'rest.yaml')
                };
            }
        ]
    };
});
