# dive-into-mongodb
1. install mongodb
2. create an account
3. create a cluster
4. connect: we have several ways to make sure its connected: we can use the shell or the compass that is provided by  `Atlas`

*** Note ***
Mongod = mongo + daemon 
what is Daemon ?
The program source code is stored on the `HardDisk`, The hardDisk is not fast and also we need a way to connect it to the `CPU` so we can execute the code. 
In our case we need a middleman between the hardDisk and CPU that is fast that middleman called a memory.
CPU can execute the code that loads from the hardDisk. 
HardDisk loads the code to the memory process the code and each process has an id and when each has done it will be cleared from the memory. However, we need a way to keep it processing in the memory permanently and this process called `Daemon`

Now, when we run  `mongod` in the terminal we got a forked process
*** forked = a process creates  a copy of itself ***
## ----------------
To find the MongoDb id 
run `pgrep mongod`
## --------------------
sometimes we got some errors saying we cant have a successful processing, try to 
make sure that we dont have a `running process` 
to find we have a `running process`
run `pgrep mongod`
then run `kill <id we got from the above commend line>` to kill and run a new process

## --------------------
So how mongoDb operate? 
We need to understand how mongoDb works, mongoDb stores data in a non-relational database.
Mongo uses dynamic schema to design its data which means no pre-defined storage structure
1. it uses collection instead of tables
2. it uses documents instead of rows
3. it uses key values instead of columns
4. great flexibility and adaptability 
The schema made of collection and each collection made of documents and document made of key:value.
One document is the minium storage unit in Mongodb
documents from the same collection can have different keys
Each document has auto generate 12 byte of hexadecimal (unique id)
one hexadecimal = 4 bits which = 1/2 byte so 12 bytes = 24 digits

collection in MongoDb
```js
{
    "_id":"here is 24 hexadecimal",
    "name":"Joe",
    "lastName":"Doe",
    "address":{
        "street:"123",
        "city":" LA",
    },
    "hobbies":["coding","surfing"]
}
```
`"_id":"here is 24 hexadecimal"`
1. the first 4 digits represents a timestamp
2. 5 middle digits represents a random value
3. the last 3 digits is incrementing counter
these feature are so important because they are in ascending order.

So MongoDb made of 3 nested layers
1. Outside: database 
2. Middle: collection 
3. Inner: documents
need to create a db and collection and organize your data in documents
