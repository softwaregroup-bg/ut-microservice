/** @type { import("ut-run").validationLib } */
module.exports = ({
    joi,
    lib: {
        bigintRequired,
        stringRequired,
        stringNull
    }
}) => ({
    bar: joi.object().keys({
        barId: bigintRequired,
        barName: stringRequired.max(50),
        barDescription: stringNull.max(255)
    }),
    barId: bigintRequired
});
