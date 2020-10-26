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
            'api/microservice/*.js',
            'api/sql/schema/*.sql',
            'api/sql/seed/*.sql',
            'ui/react/**/*.js',
            'validations/*.js',
            'browser.js',
            'errors.json',
            'index.js',
            'package.json',
            'README.md'
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
    }, {
        files: 'README.md',
        replace: [[
            /^## Creating microservices based on this template[^#]+^## /ms,
            '## '
        ]]
    }]
};
