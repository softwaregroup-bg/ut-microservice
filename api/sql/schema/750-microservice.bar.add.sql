ALTER PROCEDURE [microservice].[bar.add] -- create bar object
    @bar [microservice].barTT READONLY, -- object to create
    @meta core.metaDataTT READONLY -- information for the user that makes the operation
AS

DECLARE @callParams XML
DECLARE @userId BIGINT = (SELECT [auth.actorId] FROM @meta)
DECLARE @barId BIGINT
DECLARE @TranCounter INT = @@TRANCOUNT

BEGIN TRY
    --ut-permission-check
    IF @TranCounter = 0 BEGIN TRANSACTION
        INSERT INTO [microservice].[bar] (
            barName,
            barDescription
        )
        SELECT
            barName,
            barDescription
        FROM
            @bar
        SET @barId = SCOPE_IDENTITY()
    IF @TranCounter = 0 COMMIT TRANSACTION
    EXEC core.auditCall @procid = @@PROCID, @params = @callParams
    EXEC [microservice].[bar.get] @barId = @barId
END TRY
BEGIN CATCH
    IF @@TRANCOUNT > 0 ROLLBACK TRANSACTION
    IF error_number() NOT IN (2627)
    BEGIN
        EXEC [core].[error]
    END
    ELSE
    BEGIN TRY
        RAISERROR('Item already exists', 16, 1);
    END TRY
    BEGIN CATCH
        EXEC [core].[error]
    END CATCH
END CATCH
