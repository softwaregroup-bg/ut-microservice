module.exports = [
    'ut-cache',
    'ut-db',
    'ut-core',
    'ut-document',
    'ut-customer',
    'ut-user',
    '../..'
].map(item => [{
    main: require.resolve(item),
    pkg: require.resolve(item + '/package.json')
}]);
