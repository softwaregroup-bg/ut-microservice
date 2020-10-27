module.exports = ({
    import: {
        microserviceColorNotFound
    }
}) => ({
    css(color) {
        const result = {
            blue: '#0000FF',
            navy: '#000080',
            green: '#008000'
        }[color];
        if (!result) throw microserviceColorNotFound({params: {color}});
        return result;
    }
});
