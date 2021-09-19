/** @type { import("../../handlers").handlerSet } */
export default function backend() {
    return [
        () => ({namespace: ['microservice']}),
        require('./microservice.foo.process').default
    ];
}
