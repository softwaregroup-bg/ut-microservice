// @ts-check
/** @type { import("../../handlers").libFactory } */
module.exports = ({
    import: {
        errorMicroserviceColorNotFound
    }
}) => ({
    css(color) {
        const result = {
            blue: '#0000FF',
            navy: '#000080',
            green: '#008000'
        }[color];
        if (!result) throw errorMicroserviceColorNotFound({params: {color}});
        return result;
    }
});
