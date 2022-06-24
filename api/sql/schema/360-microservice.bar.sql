CREATE TABLE [microservice].[bar] ( -- bar objects
    barId BIGINT IDENTITY(1000, 1) NOT NULL, -- id of the bar
    barName NVARCHAR(50) NOT NULL, -- bar name
    barDescription NVARCHAR(255), -- bar description
    CONSTRAINT pkBar PRIMARY KEY CLUSTERED (barId)
)
