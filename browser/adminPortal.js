require('ut-portal-admin/entry')({
    modules: [
        require('ut-core/portal').default,
        require('../portal').default
    ],
    utCore: true,
    utMicroservice: true,
    portal: {
        test: {
            menu: [
                'microservice.bar.browse',
                'microservice.bar.open',
                'microservice.foo.browse',
                'microservice.foo.open'
            ]
        }
    }
});
