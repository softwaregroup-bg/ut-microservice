/** @type { import("ut-run").validationFactory } */
module.exports = ({
    joi,
    lib: {
        bigintRequired,
        stringRequired,
        stringNull,
        file
    }
}) => ({
    'microservice.document.add': () => ({
        description: 'add new document',
        body: {
            maxBytes: 10 * 1024 * 1024,
            output: 'stream',
            parse: false,
            allow: 'multipart/form-data'
        },
        params: joi.object().keys({
            document: joi.object({
                documentName: stringRequired,
                documentIcon: file
            }),
            page: joi.array().items(
                joi.object({
                    title: stringNull,
                    attachment: file
                })
            )
        }).required(),
        result: joi.object().keys({
            document: joi.object({
                documentId: bigintRequired,
                documentName: stringRequired,
                documentIcon: file
            }),
            page: joi.array().items(
                joi.object({
                    title: stringNull,
                    attachment: file
                })
            )
        }).required()
    })
});
