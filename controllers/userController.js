const User = require("../models/userModel");
const bcryptjs = required("bcryptjs");

const securePassword = async(password)=>{
    try {
            const passwordHash = await bcryptjs.hash(password, 10);
            return passwordHash;
    } catch (error) {
        
    }
}

const register_user = async(req, res) => {
    try {
            const spassword = await securePassword(req.body.password);

            const user = new User({
                name: req.body.name,
                email: req.body.email,
                password:spassword,
                image: req.file.filename,
                type: req.file.type,
            });

            const userData  = await User.findOne({email: req.body.email});
            if (userData) {
                res.status(200).send({success:false,msg:"Email already Exists"});
            } else {
                const user_data = await user.save();
                res.status(200).send({success:true,data:user_data});
            }



    } catch (error) {
        res.status(400).send(error.message);
        // console.log();
    }
}

module.exports = {
    register_user
}