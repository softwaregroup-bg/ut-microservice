require('.').run({
    method: 'unit',
    params: {
        jobs: 'ui',
        db: {
            updates: false
        },
        utLogin: {
            login: {
                cookie: {
                    isSecure: false
                }
            }
        }
    }
});
