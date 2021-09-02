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
    utCustomer: true,
    utDocument: true,
    utUser: true,
    utMicroservice: true
};
