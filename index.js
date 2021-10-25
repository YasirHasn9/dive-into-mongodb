const bodyParser = require("body-parser")
const express = require("express")
const path = require("path")
const app = express()
const mongoose = require("mongoose")
// establish a connection 
// "mongodb+srv://yasir_usr:yasir1991@cluster0.ft8cu.mongodb.net/todo?retryWrites=true&w=majority"
const uri = "mongodb//localhost/todo"
mongoose.connect("mongodb+srv://yasir_usr:yasir1991@cluster0.ft8cu.mongodb.net/todo?retryWrites=true&w=majority")
const port = 13371
app.use("/" , express.static(path.resolve(__dirname, "assets")))
app.use(bodyParser.json())
const db = require("./models/todo")

console.log("This is the db" , db)


app.post("/api/create" ,async(req,res) => {
    const record = req.body
    console.log(record)
    res.json({status:"ok"})
})
app.listen(port , () => {
    console.log(`http://localhost:${port}`)
})