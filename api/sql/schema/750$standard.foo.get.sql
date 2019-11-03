CREATE PROCEDURE microservice.[foo.get] --returns foo by fooId
    @fooId BIGINT
AS
SELECT
    foo.*
FROM
    [microservice].[foo] foo
WHERE
    fooId = @fooId
