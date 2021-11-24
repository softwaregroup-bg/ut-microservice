/** @type { import("../../handlers").handlerFactory } */
module.exports = ({
    import: {
        errorExampleAuth
    }
}) => ({
    'example.request.receive'({params, query, payload, headers, auth}) {
        payload = JSON.parse(payload);
        if (headers.authorization !== 'Bearer secret-token') throw errorExampleAuth();
        return {params, query, payload, headers, auth};
    }
});
