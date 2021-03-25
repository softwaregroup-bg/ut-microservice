module.exports = function test() {
    return {
        foo: function(test, bus, run, ports, {
            microserviceFooList
        }) {
            return run(test, bus, [
                microserviceFooList(),
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
