# Using MySQL Database

## Import Data from csv File
Data was stored in `VetDBdataSource.csv`. This can be import to the placement table 
using the following command:
```
LOAD DATA LOCAL INFILE ’VetDBdataSource.csv‘ INTO TABLE placements
FIELDS TERMINATED BY ','ENCLOSED BY '"'LINES TERMINATED BY '\n'
IGNORE 1 ROWS;
```
Use LOCAL keyword if loading data locally

# Using MongoDB
## Access to Database
Data has been imported into MongoDB Cloud Storage and can be accessed [here](https://cloud.mongodb.com/v2/63e7f4a52697e25938758da5#/clusters)

## Connet to Database with MongoDB Compass
1. Copy the connecting string
``` 
mongodb+srv://admin:<password>@vetdb.qbxlez2.mongodb.net/test
```
2. Open MongoDB Compass, paste the link and connect with username and password. Username and password can be found in our [Teams Channel](https://teams.microsoft.com/l/message/19:kD9JZgPCO-yciViRfptWrRPxQhGde4Olv5El45aVVjc1@thread.tacv2/1676146520261?tenantId=b2e47f30-cd7d-4a4e-a5da-b18cf1a4151b&groupId=7b6559fc-2be2-45a1-8fe8-d81ab7357730&parentMessageId=1676146520261&teamName=grp-SPE%20Project%2039%20VetDB&channelName=%E5%B8%B8%E8%A7%84&createdTime=1676146520261&allowXTenantAccess=false)

