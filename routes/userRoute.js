const express = require("express");
const user_route = express();

const bodyParser = require("body_parser");
user_route.use(bodyParser.json());
user_route.use(bodyParser.urlencoded({extended:true}));


const multer = require("multer");
const path = require("path");

user_route.use(express.static('public'));

multer.diskStorage({
    destination:function(req, file, cb){
        cb(null,path.join(__dirname,'../public/userimages/'), function(error,success){
            if (error) throw error   
            });
    },

        filename:function(req, file,cb){
           const name = Date.now()+'-'+file.originalname;

           
        }

});