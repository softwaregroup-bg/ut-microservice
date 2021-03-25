module.exports = [
    function steps({callSite}) {
        return {
            'steps.microservice.foo.list': (params = {}) => ({
                ...callSite?.(),
                method: 'microservice.foo.fetch',
                name: 'fooList',
                params,
                result(result, assert) {
                    assert.ok(result.length, 'foo list');
                }
            })
        };
    }
];
