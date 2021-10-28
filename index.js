require("dotenv").config()
const bodyParser = require("body-parser")
const express = require("express")
const path = require("path")
const app = express()
const mongoose = require("mongoose")
const port = process.env.PORT || 13371
const username = process.env.USERNAME
const password = process.env.PASSWORD 
const uri = process.env.URI || `mongodb+srv://${username}:${password}@cluster0.ft8cu.mongodb.net/todo?retryWrites=true&w=majority`

// establish a connection 
mongoose.connect(`${uri}`)
app.use("/" , express.static(path.resolve(__dirname, "assets")))
app.use(bodyParser.json())
const db = require("./models/todo")


app.get("/api" , async (req,res ) => {

    const records = await db.find()
    res.send(records)
})
app.post("/api/create" ,async(req,res) => {
    const record = req.body
    await db.create(record)
    res.json({status:"ok"})
})

app.get("/api/get" , async (req, res) => {
    const response = await db.find()
    res.json(response)
})

app.put('/api/modify', async (req, res) => {
    const {old: oldTitle , new : newTitle} = req.body
    console.log(`Old: ${oldTitle}  --- \t New: ${newTitle}`)
    const response = await db.updateOne({
        record: oldTitle
    }, {
       $set: { record: newTitle}
    })

    console.log(response)
    res.json({
        status:"Ok"
    })
})

app.post("/api/delete" , async (req, res) => {
    const {record} =  req.body
    const response = await db.findOneAndDelete({
        record
    })
    console.log(response)

    res.json({
        statue: "Deleted"
    })
})

app.listen(port , () => {
    console.log(`http://localhost:${port}`)
})