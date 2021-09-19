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
    utCore: true,
    utCustomer: {test: false},
    utDocument: {test: false},
    utUser: {test: false},
    utMicroservice: true
};
