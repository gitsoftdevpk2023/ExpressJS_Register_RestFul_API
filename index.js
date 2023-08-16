const express = require("express");
const app = express();
const mongoose = require("mongoose");
// connect localhost
mongoose.connect("mongodb://localhost:27017/BusinessManagement");

// set DATABASE port & showing Message
app.listen(3000, function(){
    console.log("Server is Ready");
});

