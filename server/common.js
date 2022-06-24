module.exports = {
    implementation: 'microservice',
    adapter: true,
    utPort: {
        noRecursion: true
    },
    utBus: {
        serviceBus: {
            requireMeta: true
        }
    },
    utCache: {
        adapter: true
    },
    utPortal: true,
    utBrowser: true,
    utLogin: true,
    utCore: true,
    utCustomer: {test: false},
    utDocument: {test: false},
    utUser: true,
    utMicroservice: true
};
