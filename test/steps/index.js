module.exports = [
    function steps() {
        return {
            'steps.list foo'(defineStep) {
                return defineStep({
                    method: 'microservice.foo.fetch',
                    name: 'fooList',
                    params: {},
                    result(result, assert) {
                        assert.ok(result.length, 'foo list');
                    }
                });
            }
        };
    }
];
