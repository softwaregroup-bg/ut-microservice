CREATE TABLE [microservice].[foo] ( -- foo items
    fooId BIGINT NOT NULL, -- id of the foo item
    color NVARCHAR(50), -- color of the foo item
    CONSTRAINT pkFoo PRIMARY KEY CLUSTERED (fooId),
    CONSTRAINT fkFoo_fooId FOREIGN KEY (fooId) REFERENCES [core].[itemName] (itemNameId)
)
