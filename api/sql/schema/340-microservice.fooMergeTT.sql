CREATE TYPE [microservice].[fooMergeTT] AS TABLE(
    [name] NVARCHAR(200) NOT NULL, --name of the item
    [code] NVARCHAR(200) NOT NULL, --code of the item, should be unique in the type
    [color] NVARCHAR(50) NOT NULL --code of the item, should be unique in the type
)
