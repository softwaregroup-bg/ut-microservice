var path = require('path');
module.exports = function sqlStandard({config}) {
    return config && {schema: [{path: path.join(__dirname, 'standard'), linkSP: true}]};
};
