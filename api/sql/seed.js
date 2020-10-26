const path = require('path');

module.exports = function sqlSeed({
    config
}) {
    return {
        seed: [{
            path: path.join(__dirname, 'seed'),
            linkSP: true,
            config
        }]
    };
};
