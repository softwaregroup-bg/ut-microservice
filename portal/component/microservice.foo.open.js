/** @type { import("../../handlers").pageFactory } */
export default ({
    lib: {
        fooEdit
    }
}) => ({
    'microservice.foo.open': () => ({
        title: 'Edit foo',
        permission: 'microservice.foo.get',
        component: fooEdit
    })
});
