// @ts-check
import React from 'react';
import { useSelector } from 'react-redux';

/** @type { import("../../handlers").handlerFactory } */
export default ({
    import: {
        handle$microserviceFooClick,
        handleTabShow,
        component$microserviceFooBrowse,
        component$microserviceFooOpen,
        component$microserviceFooNew,
        component$microserviceFooDemo
    },
    utMeta
}) => ({
    'microservice.foo.demo': () => ({
        title: 'Foo demo',
        permission: 'microservice.foo.demo',
        component: () => function fooDemo(params) {
            // @ts-ignore
            const pages = useSelector(({pages}) => pages);
            return <div>
                <div>TEST TAB</div><div>{JSON.stringify(params)}</div>
                <button onClick={handle$microserviceFooClick}>
                    Test reducer {JSON.stringify(pages)}
                </button>
                <button onClick={() => handleTabShow(component$microserviceFooBrowse, utMeta())}>
                    Browse foo
                </button>
                <button onClick={() => handleTabShow(component$microserviceFooNew, utMeta())}>
                    Create foo
                </button>
                <button onClick={() => handleTabShow([component$microserviceFooOpen, {id: 1}], utMeta())}>
                    Open foo
                </button>
            </div>;
        }
    })
});
