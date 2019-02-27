module.exports = function standard({utMethod}) {
    const fooGet = utMethod('db/standard.foo.get', {
        cache: {
            key: msg => ({
                id: msg.fooId
            })
        }
    });
    return {
        'standard.foo.get': fooGet // this is optional example how to enable cache
    };
};
