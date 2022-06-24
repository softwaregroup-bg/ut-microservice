CREATE PROCEDURE microservice.[bar.fetch] --returns bar objects
    @bar_barName NVARCHAR(50),
    @bar_barDescription NVARCHAR(255),
    @orderBy [core].orderByTT READONLY, -- information for ordering
    @paging [core].[pagingTT] READONLY, --information for paging
    @meta core.metaDataTT READONLY -- information about the user making the operation
AS

DECLARE @sortBy VARCHAR(50) = 'barName'
DECLARE @sortOrder VARCHAR(4) = 'ASC'
DECLARE @pageSize INT
DECLARE @pageNumber INT
SELECT @sortBy = [field], @sortOrder = [dir] FROM @orderBy
SELECT @pageNumber = ISNULL(pageNumber, 1), @pageSize = ISNULL([pageSize], 20) FROM @paging

SELECT 'bar' AS resultSetName
SELECT
    barId,
    barName,
    barDescription
FROM
    [microservice].[bar]
WHERE
    (@bar_barName IS NULL OR barName LIKE '%' + @bar_barName + '%') AND
    (@bar_barDescription IS NULL OR barDescription LIKE '%' + @bar_barDescription + '%')
ORDER BY
    CASE WHEN @sortOrder != 'DESC' THEN
        CASE @sortBy
            WHEN 'barName' THEN barName
            WHEN 'barDescription' THEN barDescription
        END
    END,
    CASE WHEN @sortOrder = 'DESC' THEN
        CASE @sortBy
            WHEN 'barName' THEN barName
            WHEN 'barDescription' THEN barDescription
        END
    END DESC,
    barId
OFFSET @PageSize * (@PageNumber - 1) ROWS
FETCH NEXT @PageSize ROWS ONLY
