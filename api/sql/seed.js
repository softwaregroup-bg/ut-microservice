const path = require('path');
module.exports = function sqlSeed() {
    return {seed: [{path: path.join(__dirname, 'seed'), linkSP: true}]};
};
