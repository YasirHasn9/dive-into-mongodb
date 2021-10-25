const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    // require is technically a watcher on your code 
    // so you are not gonna blow it 
    record: {type:String , required:true},
    date: {type:Number , required:true, default: 100}
})
const model = mongoose.model("Todo" , schema)
module.exports = model