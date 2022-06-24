/** @type { import('ut-model').model<'microservice', 'bar'> } */
module.exports = ({joi}) => ({
    subject: 'microservice',
    object: 'bar',
    browser: {
        // navigator: true
    },
    schema: {
        properties: {
            bar: {
                properties: {
                    barName: {},
                    barDescription: {
                        widget: {
                            type: 'text'
                        }
                    }
                }
            }
        }
    },
    cards: {
        browse: {
            label: 'Bars',
            widgets: ['bar.barName', 'bar.barDescription']
        },
        edit: {
            label: 'Bar',
            widgets: ['bar.barName', 'bar.barDescription']
        }
    },
    reports: {
        list: {
            validation: joi?.object(),
            params: ['barName'],
            columns: ['barName', 'barDescription'],
            fetch: 'microservice.bar.report'
        }
    }
});
