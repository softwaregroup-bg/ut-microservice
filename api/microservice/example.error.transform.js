// @ts-check
/** @type { import("../../handlers").handlerFactory } */
module.exports = () => ({
    'example.error.transform'(error) {
        return {
            transformed: error.message
        };
    }
});
