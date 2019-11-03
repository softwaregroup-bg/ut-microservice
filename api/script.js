module.exports = function microservice({utMethod}) {
    const fooGet = utMethod('db/microservice.foo.get', {
        cache: {
            key: msg => ({
                id: msg.fooId
            })
        }
    });
    return {
        'microservice.foo.get': fooGet // this is optional example how to enable cache
    };
};
