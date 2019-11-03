module.exports = {
    params: {
        schema: {
            properties: {
                id: {
                    type: 'string',
                    title: 'Microservice namespace'
                },
                title: {
                    type: 'string',
                    title: 'Microservice title'
                }
          },
            required: ['id', 'title']
        },
        uiSchema: {

        }
    },
    rename: ({id, title, userName}) => [{
        files: `{${[
            'README.md',
            'package.json',
            'ui/react/pages/foo/create.js',
            'ui/react/pages/foo/list.js',
            'ui/react/routes.js',
            'ui/react/registerRoutes.js',
        ].join(',')}}`,
        replace: [[
            /(ut|"|'|-|\[)microservice/,
            `ut-${id}`
        ], [
            /microservice(\.|\()/,
            `ut-${id}`
        ], [
            /(ut|"|'|fk|pk)Microservice/,
            `ut-${id.substr(0, 1).toUpperCase()}${id.substr(1)}`
        ], [
            '"UT standard microservice"',
            `UT standard microservice`
        ]]
    }, {
        files: '{}',
        replace: [
        ]
    }]
};
