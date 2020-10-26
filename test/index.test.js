require('ut-run').run({
    method: 'unit',
    version: require('../package.json').version,
    root: __dirname,
    resolve: require.resolve
});
