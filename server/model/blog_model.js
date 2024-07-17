const { default: mongoose } = require("mongoose");
const mongodb = require("../config/mongo");


const blogschema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    date:{
        type:Date,
        default : Date.now()
    }
})

module.exports = mongoose.model('blogs',blogschema)