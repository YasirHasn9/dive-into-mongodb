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