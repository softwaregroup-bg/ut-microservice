module.exports = function validation() {
    return {
        'standard.foo.get': () => require('./foo/get')
    };
};
