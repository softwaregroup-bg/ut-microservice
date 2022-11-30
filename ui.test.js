require('.').run({
    method: 'unit',
    env: 'test',
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
