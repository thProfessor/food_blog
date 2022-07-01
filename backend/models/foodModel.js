const mongoose = require("mongoose");

const {Schema} = mongoose;

const foodSchema = new Schema({
    name:{
        type: String,
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
    desc:{
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    available:{
        type:Boolean,
        default:true,
    }
},{
    timestamps:true
})

module.exports = mongoose.model("Food",foodSchema)
