/** @type { import("../../handlers").test } */
module.exports = function test() {
    return {
        bar: function(test, bus, run) {
            return run(test, bus, [
                'Generate admin user',
                'Login admin user',
                {
                    name: 'addBar',
                    method: 'microservice.bar.add',
                    params: {
                        bar: {
                            barName: 'watch'
                        }
                    },
                    result(result, assert) {
                        // bus.log.table(result);
                        assert.ok(result.bar.barId, 'Return barId');
                    }
                }, {
                    name: 'getBar',
                    method: 'microservice.bar.get',
                    params: ({addBar: {bar: {barId}}}) => ({barId}),
                    result(result, assert) {
                        assert.match(result, {
                            bar: {barName: 'watch'}
                        });
                    }
                },
                'Logout admin user'
            ]);
        }
    };
};
