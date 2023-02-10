module.exports = [
    function ui() {
        return {
            portal: function(test, bus, run) {
                return run(test, bus, [
                    {
                        params: {__dirname},
                        name: 'utMicroservice.playwright',
                        result() {
                            // no assertions
                        }
                    },
                    bus?.config?.utRun?.test?.type === 'unit' && 'portal.playwright.run'
                ].filter(Boolean));
            }
        };
    }
];
