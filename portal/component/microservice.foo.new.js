/** @type { import("../../handlers").pageFactory } */
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
