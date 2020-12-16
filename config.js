const test = {
    sqlStandard: true
};

module.exports = () => ({
    // environments
    dev: {
        sqlStandard: true
    },
    test,
    jenkins: test,
    uat: {
        sqlStandard: true
    },
    // methods
    kustomize: {
        adapter: true,
        orchestrator: true,
        gateway: true
    },
    types: {
        gateway: true
    },
    doc: {
        gateway: true
    },
    // test types
    unit: {
        adapter: true,
        orchestrator: true,
        gateway: true,
        test: true
    },
    integration: {
        adapter: true,
        orchestrator: true,
        gateway: true,
        test: true
    },
    db: {
        adapter: true
    },
    validation: ({joi}) => joi.object({
        adapter: joi.boolean(),
        orchestrator: joi.boolean(),
        gateway: joi.boolean(),
        test: joi.boolean(),
        sql: joi.object({
            exclude: joi.any()
        }),
        sqlStandard: [
            joi.boolean(),
            joi.object({
                exclude: joi.any()
            })
        ],
        microserviceDispatch: [
            joi.boolean(),
            joi.object()
        ]
    })
});
