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
        ['validations/microservice.*', fn => fn.replace('microservice', camelCase(id))],
        ['api/sql/schema/*-microservice.*', fn => fn.replace('microservice', camelCase(id))]
    ],
    rename: ({id, title}) => [{
        files: `{${[
            'api/**/*.js',
            'test/**/*.js',
            'api/**/*.sql',
            'api/**/*.yaml',
            'ui/react/**/*.js',
            'validations/*.js',
            'browser.js',
            'errors.json',
            'index.js',
            'package.json',
            'README.md'
        ].join(',')}}`,
        replace: [[
            /(ut|"|'|-|\[|\/)microservice/g,
            `$1${camelCase(id)}`
        ], [
            /microservice(\.|\(|Color|Dispatch)/g,
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
