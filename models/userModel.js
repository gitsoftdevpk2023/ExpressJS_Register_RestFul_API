const mongoose = require("mongoose");
const Mongooses = require("mongooses");
const user = mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    image: {
        type:String,
        required:true
    },
    mobile: {
        type:String,
        required:true
    },
    type: {
        type:Number,
        required:true
    }
});

module.exports = Mongooses.model("User",user);