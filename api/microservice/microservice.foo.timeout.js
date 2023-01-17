/** @type { import("../../handlers").handlerFactory } */
module.exports = () => ({
    async 'microservice.foo.timeout'({timeout}, $meta) {
        return new Promise(resolve => setTimeout(() => resolve({timeout}), timeout));
    }
});
