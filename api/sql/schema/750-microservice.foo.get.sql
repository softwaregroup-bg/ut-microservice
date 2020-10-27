CREATE PROCEDURE microservice.[foo.get] --returns foo by fooId
    @fooId BIGINT
AS
SELECT
    foo.*, item.itemName name, item.itemCode code
FROM
    [microservice].[foo] foo
JOIN
    [core].[itemName] item ON foo.fooId = item.itemNameId
WHERE
    foo.fooId = @fooId
