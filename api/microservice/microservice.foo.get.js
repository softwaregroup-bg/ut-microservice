module.exports = ({utMethod}) => ({
    // cache example
    'microservice.foo.get': utMethod('db/microservice.foo.get#[0]', {
        cache: {
            key: ({fooId: id}) => ({id: String(id)})
        }
    })
});
