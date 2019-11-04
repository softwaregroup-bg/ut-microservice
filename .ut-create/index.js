const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);
const camelCase = id => id.split('-').slice(1).map((string, index) => index ? capitalize(string) : string).join('');
const pascalCase = id => id.split('-').slice(1).map(capitalize).join('');

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
            `$1${camelCase(id)}`
        ], [
            /microservice(\.|\()/g,
            `${camelCase(id)}$1`
        ], [
            /(ut|"|'|fk|pk)Microservice/g,
            `$1${pascalCase(id)}`
        ], [
            'UnderTree standard microservice',
            `${title}`
        ]]
    }]
};
