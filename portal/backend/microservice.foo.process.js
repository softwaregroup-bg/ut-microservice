/** @type { import("../../handlers").libFactory } */
export default () => ({
    async 'microservice.foo.process.request.send'(request, $meta) {
        // mutate the request or $meta
        return await super.send(request, $meta);
    },
    async 'microservice.foo.process.response.receive'(response, $meta) {
        response = await super.receive(response, $meta);
        // mutate the response or $meta
        return response;
    }
});
