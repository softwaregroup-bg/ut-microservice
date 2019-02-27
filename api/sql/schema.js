const path = require('path');

module.exports = function sql() {
    return {schema: [{path: path.join(__dirname, 'schema'), linkSP: true}]};
};
