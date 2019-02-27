CREATE TABLE [standard].[foo](--table that stores foo objects
    [fooId] BIGINT IDENTITY(1000, 1) NOT NULL, -- the foo id
    [fooCategoryId] BIGINT, -- the foo category
    [name] NVARCHAR(100) NOT NULL, -- the foo name
    CONSTRAINT [fkStandardFoo_fooCategory] FOREIGN KEY([fooCategoryId]) REFERENCES [standard].[fooCategory] ([fooCategoryId]),
    CONSTRAINT [pkStandardFoo] PRIMARY KEY CLUSTERED([fooId] ASC)
)
