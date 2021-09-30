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
    move: ({id}) => [
        ['api/microservice/microservice.*', fn => fn.replace('microservice', camelCase(id))],
        ['api/microservice', () => `${camelCase(id)}`],
        ['portal/**/microservice.*', fn => fn.replace('microservice', camelCase(id))],
        ['validations/microservice.*', fn => fn.replace('microservice', camelCase(id))],
        ['api/sql/schema/*-microservice.*', fn => fn.replace('microservice', camelCase(id))]
    ],
    rename: ({id, title}) => [{
        files: `{${[
            'api/**/*.js',
            'portal/**/*.js',
            'portal/**/*.js',
            'model/**/*.js',
            'server/**/*.js',
            'test/**/*.js',
            'api/**/*.sql',
            'api/**/*.yaml',
            'ui/react/**/*.js',
            'validations/*.js',
            'browser.js',
            'config.js',
            'build.js',
            'errors.json',
            'index.js',
            'package.json',
            'test/manual/*.http',
            'README.md'
        ].join(',')}}`,
        replace: [[
            /(ut|"|'|-|\[|\/|db\$)microservice/g,
            `$1${camelCase(id)}`
        ], [
            /microservice(\.|Tree|Color|Dispatch|Foo|Dropdown|<)/g,
            `${camelCase(id)}$1`
        ], [
            /(ut|"|'|fk|pk|error)Microservice/g,
            `$1${pascalCase(id)}`
        ], [
            'UnderTree standard microservice',
            `${title}`
        ]]
    }, {
        files: 'README.md',
        replace: [[
            /^## Creating microservices based on this template[^#]+^## /ms,
            '## '
        ]]
    }]
};
