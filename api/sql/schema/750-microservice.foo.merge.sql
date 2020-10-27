ALTER PROCEDURE [microservice].[foo.merge]
    @foo microservice.fooMergeTT READONLY,
    @meta core.metaDataTT READONLY
AS
DECLARE @items [core].[itemNameCustomTT]
INSERT INTO
    @items(itemType, itemName, itemCode)
SELECT
    'utMicroservice.foo', [name], [code]
FROM
    @foo

DECLARE @callParams XML
BEGIN TRY
    DECLARE @tranCounter INT = @@TRANCOUNT
    IF @tranCounter = 0 BEGIN TRANSACTION

    EXEC core.[itemName.merge] @list = @items, @meta = @meta

    MERGE INTO
        microservice.foo AS target
    USING
        (
            SELECT n.itemNameId, f.color
            FROM core.itemName n
            JOIN core.itemType t ON t.itemTypeId = n.itemTypeId
            JOIN @foo f ON f.code = n.itemCode
            WHERE t.alias = 'utMicroservice.foo'
        ) AS source
    ON
        target.fooId = source.itemNameId
    WHEN NOT MATCHED BY TARGET THEN
    INSERT
        (fooId, color)
    VALUES
        (source.itemNameId, source.color)
    WHEN MATCHED THEN
    UPDATE SET
        color = source.color;

    IF @TranCounter = 0 COMMIT TRANSACTION
END TRY
BEGIN CATCH
    IF @@TRANCOUNT > 0 ROLLBACK TRANSACTION
    EXEC [core].[error]
    RETURN 55555
END CATCH
