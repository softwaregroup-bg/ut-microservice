module.exports = [
    'ut-cache',
    'ut-telemetry',
    'ut-db',
    'ut-portal',
    'ut-browser',
    'ut-login',
    'ut-core',
    'ut-document',
    'ut-customer',
    'ut-user',
    '..'
].map(item => [{
    main: require.resolve(item),
    pkg: require.resolve(item + '/package.json')
}]);
