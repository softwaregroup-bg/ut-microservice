module.exports = () => function utMicroservice() {
    return {
        adapter: () => [
            require('./api/sql/schema'),
            require('./api/sql/seed'),
            require('./api/sql/standard'),
            require('./errors')
        ],
        orchestrator: () => [
            require('./errors'),
            require('./api/microservice'),
            require('ut-dispatch-db')(['microservice'], ['utMicroservice.foo'], ['utMicroservice.validation'])
        ],
        gateway: () => [
            require('./validations')
        ],
        test: () => [
            ...require('./test/steps'),
            ...require('./test/jobs')
        ]
    };
};
