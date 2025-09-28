const {User} = require('../model/userModel')
const bcrypt = require('bcrypt')
const dotenv = require('dotenv')
dotenv.config()

class UserController {

    static regUser = async(req,res) => {
        try{
            if(!req.body.email || !req.body.password || !req.body.userName) throw new Error("Missing input parameters")
            const alreadyExists = await User.findOne({email:req.body.email})
            if(alreadyExists) throw new Error("User already presented")
            let hashedPassword =await bcrypt.hash(req.body.password,10)
            req.body.password = hashedPassword
            await User.create(req.body)
            res.status(201).send({status:true,message:"User registered successfully",data:null})
        }
        catch(error){
            res.status(404).send({status:false,message:error.message,data:null})
        }
    }

}

module.exports = UserController