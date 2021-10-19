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


## --------------------------
How to interact with mongo shell?
run the commend line `mongo`
1. you'll see the version of the shell
2. connecting to a local service, this may take a min and this is why is connecting
3. shell and mongo service will exchange info after the connecting is established
4. if everything goes great we will see a mongoDb server version

mongo shell different form shell prompt 
mongo shell == MongoDB Enterprise >
shell prompt === name and where we are at


There is a different between the methods of mongo shell and mongo server and they both operate independently.
shell has native methods and they dont to be prefixed with an object names.
In mongos shell, there is 3 types of helpers
`show`, `use`, and `it`
show helps with showing the databases
use helps to switch to different db
it helps to iterate over a db


On mongo shell we can write js code with no dom methods such alert or console.log

to know in which folder we are working we can use `pwd()` 
to view a file `cat + filePath`

`sleep("mi")` method will suspend the mongo shell for a while and can help with avoiding collisions.

*** note *** 
when we use flags in a command line it means we are passing additional info

### -----------------------------------
`./mongorc.js`
mongo will create a file that enables us to interact with mongo shell and also has access
to the mongo methods and mongo server object

Now, every object has a constructor. Constructor is a blueprint for future object.
`futureObj instanceof ConstructorFunction // true`
we can defined methods and property inside the constructor.
also we can create new method on the prototype of the constructor.
the defined method on the prototype can be changed and the constructor can inherit them but
we can't redefined the ones inside.


in real life, wasting storage place is far better than losing a data. Therefore, to avoid a disaster accident
we need to disable a method that will remove the database.
we need to change the prototype of the method that will delete a database in case we use it accidentally.
in `./mongord.js`
```js
DB.prototype.dorpDatabase = () => {
    console.log("deleting a db is forbidden")
}
```

##### -----------------------------------
Rules for names
1. should be unique
2. length 1-64 char
3. no null
4. cannot use `/\. : <> $ ?`
 to avoid these mistakes 
 1. use underscore and letters
 2. namespace should be no longer than 120 bytes
 3. no $
 4. no null char
 5. cant begin with system prefix
 6. `collection` name can have `.` unlike `db`

Namespace? is the combination of database name and collection name 
`[database_name].[collection.name or index]`