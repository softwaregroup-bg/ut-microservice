module.exports = () => function utMicroservice() {
    return {
        adapter: () => [
            require('./api/sql/schema'),
            require('./api/sql/seed'),
            require('./api/sql/standard'),
            require('./errors')
        ],
        orchestrator: () => [
            require('ut-dispatch-db')(['foo'], ['utMicroservice.foo']),
            require('./api/script')
        ],
        gateway: () => [
            require('./validations')
        ],
        test: () => require('./test/jobs')
    };
};
