import React from 'react';
import { useSelector } from 'react-redux';
import { FileUpload } from 'ut-front-devextreme/core/prime';

/** @type { import("../../handlers").pageFactory } */
export default ({
    import: {
        handle$microserviceFooClick,
        handleTabShow,
        component$microserviceFooBrowse,
        component$microserviceFooOpen,
        component$microserviceFooNew,
        component$microserviceFooDemo,
        microserviceFooUpload
    },
    utMeta
}) => ({
    'microservice.foo.demo': () => ({
        title: 'Foo demo',
        permission: 'microservice.foo.demo',
        component: () => {
            const handleClick = event => handle$microserviceFooClick(event, utMeta());
            const handleBrowse = () => handleTabShow(component$microserviceFooBrowse, utMeta());
            const handleCreate = () => handleTabShow(component$microserviceFooNew, utMeta());
            const handleOpen = () => handleTabShow([component$microserviceFooOpen, { id: 1 }], utMeta());
            const handleUpload = ({options, files}) => {
                const formData = new window.FormData();
                files.forEach(file => formData.append(options.props.name, file));
                microserviceFooUpload({
                    formData,
                    ...options.props.url && {$http: {uri: options.props.url}}
                }, utMeta());
            };
            return function FooDemo(params) {
                // @ts-ignore
                const pages = useSelector(({pages}) => pages);
                return <div>
                    <div>TEST TAB</div><div>{JSON.stringify(params)}</div>
                    <button onClick={handleClick}>Test reducer {JSON.stringify(pages)}</button>
                    <button onClick={handleBrowse}>Browse foo</button>
                    <button onClick={handleCreate}>Create foo</button>
                    <button onClick={handleOpen}>Open foo</button>
                    <FileUpload name='file' url='/custom-upload-end-point' customUpload uploadHandler={handleUpload} multiple />
                </div>;
            };
        }
    })
});
