const { join } = require('path');

// @ts-check
module.exports = function openApi() {
    return {
        example: join(__dirname, 'example.yaml')
    };
};
