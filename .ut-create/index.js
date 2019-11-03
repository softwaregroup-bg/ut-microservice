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
    rename: ({id, title}) => [{
        files: `{${[
            'api/script.js',
            'api/sql/schema/150$standard.sql',
            'api/sql/schema/360$standard.fooCategory.sql',
            'api/sql/schema/361$standard.foo.sql',
            'api/sql/schema/750$standard.foo.get.sql',
            'api/sql/seed/850$standard.fooCategory.seed.sql',
            'browser.js',
            'errors.json',
            'index.js',
            'package.json',
            'README.md',
            'ui/react/index.js',
            'ui/react/pages/foo/create.js',
            'ui/react/pages/foo/list.js',
            'ui/react/registerRoutes.js',
            'ui/react/routes.js',
            'validations/index.js',
        ].join(',')}}`,
        replace: [[
            /(ut|"|'|-|\[)microservice/g,
            `ut-${id}`
        ], [
            /microservice(\.|\()/g,
            `ut-${id}`
        ], [
            /(ut|"|'|fk|pk)Microservice/g,
            `ut-${id.substr(0, 1).toUpperCase()}${id.substr(1)}`
        ], [
            'UT standard microservice',
            `${title}`
        ]]
    }]
};
