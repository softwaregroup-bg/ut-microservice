CREATE PROCEDURE microservice.[bar.get] --returns bar by barId
    @barId BIGINT
AS
SELECT 'bar' AS resultSetName, 1 AS single
SELECT
    barId,
    barName,
    barDescription
FROM
    [microservice].[bar]
WHERE
    barId = @barId
