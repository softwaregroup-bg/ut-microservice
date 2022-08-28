module.exports = [
    /** @type { import("../../handlers").steps } */
    function steps({callSite}) {
        return {
            'steps.microservice.foo.list': (params = {}) => ({
                ...callSite(),
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
