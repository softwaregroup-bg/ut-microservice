CREATE TABLE [microservice].[foo](--table that stores foo objects
    [fooId] BIGINT IDENTITY(1000, 1) NOT NULL, -- the foo id
    [fooCategoryId] BIGINT, -- the foo category
    [name] NVARCHAR(100) NOT NULL, -- the foo name
    CONSTRAINT [fkMicroserviceFoo_fooCategory] FOREIGN KEY([fooCategoryId]) REFERENCES [microservice].[fooCategory] ([fooCategoryId]),
    CONSTRAINT [pkMicroserviceFoo] PRIMARY KEY CLUSTERED([fooId] ASC)
)
