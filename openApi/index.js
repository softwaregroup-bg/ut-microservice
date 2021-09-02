// @ts-check
const { join } = require('path');

module.exports = function openApi() {
    return {
        example: join(__dirname, 'example.yaml')
    };
};
