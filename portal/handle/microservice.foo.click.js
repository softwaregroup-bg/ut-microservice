/** @type { import("../../handlers").libFactory } */
export default () => ({
    async 'microservice.foo.click'(params) {
        return {click: true};
    },
    'microservice.foo.clickReduce'({state, payload}) {
        return {...state, ...payload};
    }
});
