CREATE TABLE [standard].[fooCategory] ( -- foo categories
    fooCategoryId BIGINT NOT NULL, -- id of the foo category
    CONSTRAINT pkFooCategory PRIMARY KEY CLUSTERED (fooCategoryId),
    CONSTRAINT fkFooCategory_fooCategoryId FOREIGN KEY (fooCategoryId) REFERENCES [core].[itemName] (itemNameId)
)
