-- foo category type
MERGE INTO
    core.itemType AS target
USING
    (VALUES
        ('utStandard.foo', 'Standard foo categories')
    ) AS source (alias, name)
ON
    target.alias = source.alias
WHEN
    NOT MATCHED BY TARGET THEN
INSERT
    (alias, name)
VALUES
    (alias, name);

-- foo categories
MERGE INTO
    core.itemName AS target
USING
    (VALUES
        ('foo1', 'Foo category 1'),
        ('foo2', 'Foo category 2')
    ) AS source (itemCode, itemName)
JOIN
    core.itemType t ON t.alias = 'utStandard.foo'
ON
    target.itemCode = source.itemCode
WHEN
    NOT MATCHED BY target THEN
INSERT
    (itemTypeId, itemCode, itemName)
VALUES
    (t.itemTypeId, source.itemCode, source.itemName)
WHEN
    MATCHED THEN
UPDATE SET
    target.itemCode = source.itemCode,
    target.itemName = source.itemName;

MERGE INTO
    standard.fooCategories AS target
USING
    (
        SELECT itemNameId
        FROM core.itemName n
        JOIN core.itemType t ON t.itemTypeId = n.itemTypeId
        WHERE t.alias = 'utStandard.foo'
    ) AS source
ON
    target.fooCategoryId = source.itemNameId
WHEN
    NOT MATCHED BY TARGET THEN
INSERT
    (fooCategoryId)
VALUES
    (source.itemNameId);
