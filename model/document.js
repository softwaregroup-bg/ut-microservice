/** @type { import('ut-model').model<'microservice', 'document'> } */
module.exports = ({joi}) => ({
    subject: 'microservice',
    object: 'document',
    browser: {
        // navigator: true
    },
    schema: {
        properties: {
            document: {
                properties: {
                    documentName: {},
                    documentIcon: {
                        widget: {
                            type: 'file'
                        }
                    }
                }
            },
            page: {
                widget: {
                    type: 'table',
                    widgets: ['title', 'attachment']
                },
                items: {
                    properties: {
                        title: {},
                        attachment: {
                            widget: {type: 'file'}
                        }
                    }
                }
            }
        }
    },
    cards: {
        browse: {
            label: 'Documents',
            widgets: ['document.documentName', 'document.documentDescription']
        },
        edit: {
            label: 'Documents',
            widgets: ['document.documentName', 'document.documentIcon', 'page']
        }
    }
});
