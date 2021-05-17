// @ts-check
/** @type { import("../../handlers").handlerFactory } */
export default ({
    lib: {
        fooEdit
    }
}) => ({
    'microservice.foo.new': () => ({
        title: 'Create foo',
        permission: 'microservice.foo.add',
        component: fooEdit
    })
});
