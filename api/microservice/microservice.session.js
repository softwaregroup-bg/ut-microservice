/** @type { import("../../handlers").handlerFactory } */
module.exports = ({
    import: {
        db$microserviceSessionDelete,
        db$microserviceSessionGet,
        db$microserviceSessionSet
    }
}) => ({
    'microservice.session.delete': db$microserviceSessionDelete,
    'microservice.session.get': db$microserviceSessionGet,
    'microservice.session.set': db$microserviceSessionSet
});
