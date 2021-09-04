/** @type { import("../../handlers").handlerFactory } */
module.exports = ({
    import: {
        errorMicroserviceFooNotFound
    },
    lib: {
        css
    }
}) => ({
    async 'microservice.foo.process'({fooId}, $meta) {
        const found = await this.findHandler('microservice.foo.get').call(this, {fooId}, $meta);
        if (found) {
            const {color} = found;
            return {css: css(color)};
        } else {
            throw errorMicroserviceFooNotFound({params: {fooId}});
        }
    }
});
