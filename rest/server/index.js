module.exports = [
    '..'
].map(item => [{
    main: require.resolve(item),
    pkg: require.resolve(item + '/package.json')
}]);
