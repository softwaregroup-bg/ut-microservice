const test = {
    adapter: true,
    orchestrator: true,
    gateway: true,
    test: true,
    sql: {
        integration: true
    },
    sqlStandard: true,
    sqlTest: true
};

module.exports = () => ({
    test,
    jenkins: test,
    unit: {
        adapter: true,
        orchestrator: true,
        gateway: true,
        sqlStandard: true,
        sqlTest: true,
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
        sqlStandard: joi.boolean(),
        sqlTest: joi.boolean(),
        sql: [
            joi.boolean(),
            joi.object({
                integration: joi.boolean()
            })
        ]
    })
});
