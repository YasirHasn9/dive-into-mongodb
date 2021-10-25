const express = require("express")
const path = require("path")
const app = express()
const port = 13371
app.use("/" , express.static(path.resolve(__dirname, "assets")))

app.listen(port , () => {
    console.log(`http://localhost:${port}`)
})