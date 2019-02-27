CREATE PROCEDURE standard.[foo.get] --returns foo by fooId
    @fooId BIGINT
AS
SELECT
    foo.*
FROM
    [standard].[foo] foo
WHERE
    fooId = @fooId
