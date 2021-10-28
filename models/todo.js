const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    // require is technically a watcher on your code 
    // so you are not gonna blow it 
    record: {type:String , required:true},
    date: {type:Number , required:true, default: Date.now}
})

// we dont specify id because mongoose would do that for 
// us
const model = mongoose.model("Todo" , schema)
module.exports = model

//result
/*
{
    record:" Something",
    _id: ObjectId(6177415e215abf3d31e5acd8),
    data: 100 because we assigned to it,
    _v: 0 I have no idea what that is yet :)
}
*/