/** @type { import('ut-model').model<'microservice', 'tree'> } */
module.exports = ({joi}) => ({
    subject: 'microservice',
    object: 'tree',
    browser: {
        navigator: true
    },
    schema: {
    },
    cards: {
        browse: {
            label: 'Trees',
            widgets: ['tree.treeName', 'tree.treeDescription']
        },
        edit: {
            label: 'Edit tree',
            widgets: ['tree.treeName', 'tree.treeDescription']
        }
    },
    reports: {
        list: {
            validation: joi?.object(),
            params: ['tree.treeName'],
            columns: ['tree.treeName'],
            fetch: 'microservice.tree.report'
        }
    }
});
