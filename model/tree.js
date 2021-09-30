module.exports = ({joi}) => ({
    joi,
    subject: 'microservice',
    object: 'tree',
    browser: {
        navigator: true
    },
    properties: {
    },
    cards: {
        browse: {
            title: 'Trees',
            properties: ['treeName', 'treeDescription']
        },
        edit: {
            title: 'Edit tree',
            properties: ['treeName', 'treeDescription']
        }
    }
});
