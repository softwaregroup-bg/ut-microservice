const path = require('path');

module.exports = function sqlStandard({
    config
}) {
    return config && {
        seed: [{
            path: path.join(__dirname, 'standard'),
            linkSP: true,
            config
        }]
    };
};
