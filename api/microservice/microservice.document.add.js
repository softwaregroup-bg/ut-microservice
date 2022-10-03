/** @type { import("../../handlers").handlerFactory } */
module.exports = () => ({
    'microservice.document.add'(params) {
        console.dir(params, {depth: 5}); // eslint-disable-line no-console
        params.document.documentId = 1;
        delete params.page;
        return params;
    }
});
