// @ts-check
import React from 'react';
import { useSelector } from 'react-redux';

/** @type { import("../../handlers").handlerFactory } */
export default ({
    import: {
        handle$microserviceFooClick,
        handleTabShow,
        component$coreItemBrowse,
        component$coreItemNew,
        component$coreItemOpen,
        component$microserviceFooBrowse,
        component$microserviceFooDemo
    }
}) => ({
    'microservice.foo.open': () => ({
        title: 'Foo edit',
        permission: 'microservice.foo.open',
        component: () => function FooOpen() {
            // @ts-ignore
            const pages = useSelector(({pages}) => pages);
            return (
                <>
                    <button onClick={handle$microserviceFooClick}>
                        Test {JSON.stringify(pages)}
                    </button>
                    <button onClick={() => handleTabShow(component$coreItemBrowse)}>
                        Browse items
                    </button>
                    <button onClick={() => handleTabShow(component$coreItemNew)}>
                        New item
                    </button>
                    <button onClick={() => handleTabShow([component$coreItemOpen, {id: 1}])}>
                        Edit item
                    </button>
                    <button onClick={() => handleTabShow(component$microserviceFooBrowse)}>
                        Browse foo
                    </button>
                    <button onClick={() => handleTabShow([component$microserviceFooDemo, {property: 'value'}])}>
                        Demo foo
                    </button>
                </>
            );
        }
    })
});
