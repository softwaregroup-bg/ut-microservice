CREATE PROCEDURE microservice.[foo.fetch] --returns foo items by color
    @color NVARCHAR(50)
AS
SELECT
    foo.*, item.itemName name, item.itemCode code
FROM
    [microservice].[foo] foo
JOIN
    [core].[itemName] item ON foo.fooId = item.itemNameId
WHERE
    foo.color = @color OR @color IS NULL
