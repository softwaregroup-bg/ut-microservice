module.exports = () => function utMicroservice() {
    return {
        config: require('./config'),
        adapter: () => [
            require('./api/sql/schema'),
            require('./api/sql/seed'),
            require('./api/sql/standard'),
            require('./errors')
        ],
        orchestrator: () => [
            require('./errors'),
            require('./api/microservice'),
            require('ut-dispatch-db')(['microservice', 'example'], ['utMicroservice.foo'], ['utMicroservice.validation'])
        ],
        gateway: () => [
            require('./errors'),
            require('./validations'),
            require('./openApi')
        ],
        test: () => [
            ...require('./test/steps'),
            ...require('./test/jobs')
        ]
    };
};

if (require.main === module) require('ut-run/microservice');
