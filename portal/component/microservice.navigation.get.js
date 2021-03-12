// @ts-check
import React from 'react';

import Navigation from './Navigation';

/** @type { import("../../handlers").handlerFactory } */
export default ({
    import: {
        customerOrganizationGraphFetch
    }
}) => ({
    'microservice.navigation.get': params => function MicroserviceNavigationGet(props) {
        return <Navigation graphFetch={customerOrganizationGraphFetch} {...props}/>;
    }
});
