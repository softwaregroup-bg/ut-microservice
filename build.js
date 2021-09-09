require('ut-run').run({
    method: 'types',
    main: () => [[{
        main: require.resolve('./'),
        pkg: require.resolve('./package.json')
    }], [{
        main: require.resolve('ut-db'),
        pkg: require.resolve('ut-db/package.json')
    }]],
    config: {
        utMicroservice: true,
        utRun: {
            types: {
                dependencies: 'login,core,customer,document,user',
                validation: 'utMicroservice.validation',
                error: 'utMicroservice.error'
            }
        }
    }
});
