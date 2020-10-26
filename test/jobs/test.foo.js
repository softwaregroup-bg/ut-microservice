module.exports = function test() {
    return {
        foo: function(test, bus, run) {
            return run(test, bus, [
                'list foo',
                {
                    method: 'microservice.foo.get',
                    name: 'fooGet',
                    params: ({fooList: [{fooId}]}) => ({fooId}),
                    result(result, assert) {
                        assert.ok(result.fooId, 'foo found');
                    }
                },
                {
                    method: 'microservice.foo.process',
                    name: 'process',
                    params: ({fooGet: {fooId}}) => ({fooId}),
                    result(result, assert) {
                        assert.ok(result.css, 'return color');
                    }
                }
            ]);
        }
    };
};
