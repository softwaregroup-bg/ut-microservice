const path = require('path');
module.exports = function sqlSeed() {
    return {schema: [{path: path.join(__dirname, 'seed'), linkSP: true}]};
};
