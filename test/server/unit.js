module.exports = {
    implementation: 'microservice',
    adapter: true,
    utLog: {
        streams: {
            sentry: {
                level: 'error',
                stream: '../sentryNodeStream',
                streamConfig: {
                    dsn: 'http://32bf0ea099474de9821c466ecac070d9@sentry.k8s.softwaregroup-bg.com/18',
                    patchGlobal: false,
                    logger: 'ut-microservice'
                },
                type: 'raw'
            }
        }
    },
    db: {
        test: true,
        updates: true,
        connection: {
            server: 'infradb14',
            user: 'gitlab',
            password: 'gitlab'
        },
        create: {
            user: 'ut5'
        }
    },
    utCache: {
        adapter: true
    },
    utCore: {
        adapter: true,
        sqlStandard: true,
        sqlTest: true
    },
    utCustomer: {
        adapter: true,
        orchestrator: true,
        gateway: true,
        test: true,
        customer: {
            debug: true
        },
        validationTest: true,
        sql: {
            ledger: true,
            integration: true,
            notice: true
        },
        sqlStandard: true,
        sqlTest: true
    },
    utDocument: {
        adapter: true,
        sqlStandard: true,
        sqlTest: true
    },
    utUser: {
        adapter: true,
        orchestrator: true,
        gateway: true,
        test: true,
        identity: true,
        permission: true,
        validation: {
            identity: true
        },
        validationTest: true,
        sqlStandard: true,
        sqlTest: true,
        sql: {
            hashParams: {
                iterations: 1
            },
            debug: true
        }
    },
    utMicroservice: true
};
