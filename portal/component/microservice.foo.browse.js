// @ts-check
import React from 'react';
import Async from 'ut-front-devextreme/core/Async';

import Browse from './Browse';

/** @type { import("../../handlers").handlerFactory } */
export default ({
    import: {
        customerOrganizationFetch,
        component$microserviceNavigationGet
    }
}) => ({
    'microservice.foo.browse': () => ({
        title: 'Foo list',
        permission: 'microservice.foo.browse',
        component: () => function FooBrowse() {
            return (
                <Browse fetch={customerOrganizationFetch}>
                    <Async component={component$microserviceNavigationGet} />
                </Browse>
            );
        }
    })
});
