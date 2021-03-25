// @ts-check
import React from 'react';

/** @type { import("../../handlers").handlerFactory } */
export default () => ({
    'microservice.foo.demo': () => ({
        title: 'Foo demo',
        permission: 'microservice.foo.demo',
        component: () => function fooDemo(params) {
            return <div><div>TEST TAB</div><div>{JSON.stringify(params)}</div></div>;
        }
    })
});
