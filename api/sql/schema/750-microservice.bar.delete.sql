ALTER PROCEDURE [microservice].[bar.delete] --delete bar objects
    @barId [core].[arrayNumberList] READONLY, --bar ids
    @meta core.metaDataTT READONLY -- information for the user that makes the operation

AS
DECLARE @callParams XML
DECLARE @TranCounter INT = @@TRANCOUNT
SELECT 'bar' AS resultSetName
BEGIN TRY
    --ut-permission-check
    IF @TranCounter = 0 BEGIN TRANSACTION
        DELETE FROM
            microservice.bar
        OUTPUT
            deleted.barId,
            deleted.barName,
            deleted.barDescription
        WHERE
            barId IN (SELECT [value] FROM @barId)
    IF @TranCounter = 0 COMMIT TRANSACTION
    EXEC core.auditCall @procid = @@PROCID, @params = @callParams
END TRY
BEGIN CATCH
    IF @@trancount > 0
        ROLLBACK TRANSACTION
    EXEC core.error
    RETURN 55555
END CATCH
