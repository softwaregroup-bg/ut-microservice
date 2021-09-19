const test = {
    sqlStandard: true
};

const segment = 'microservice.session';

module.exports = () => ({
    // environments
    common: {
        foo: {
            import: {
                'db/microservice.session.set': {
                    cache: {
                        instead: 'set',
                        ttl: 60000,
                        key: ({id}) => ({
                            id: String(id),
                            segment
                        })
                    }
                },
                'db/microservice.session.get': {
                    cache: {
                        instead: 'get',
                        key: ({id}) => ({
                            id: String(id),
                            segment
                        })
                    }
                },
                'db/microservice.session.delete': {
                    cache: {
                        instead: 'drop',
                        key: ({id}) => ({
                            id: String(id),
                            segment
                        })
                    }
                }
            }
        }
    },
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
        adapter: true,
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
    // overlays
    db: {
        adapter: true
    },
    microservice: {
        adapter: true,
        orchestrator: true,
        gateway: true
    },
    validation: ({joi}) => joi.object({
        adapter: joi.boolean(),
        orchestrator: joi.boolean(),
        gateway: joi.boolean(),
        test: joi.boolean(),
        foo: joi.object(),
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
