const Joi = require('joi')
const {regUserSchema} = require("../validation/joiSchema")

const regUserValidate = async (req,res,next) => {
    try{
        const regVal = regUserSchema.validate(req.body)
        if(regVal.error){
            res.status(400).send({status:false,message:regVal.error.details[0].message})
        }else{
            next()
        }
    }
    catch(error){
        res.status(400).send({status:false,message:error.message})
    }
}

module.exports = {regUserValidate}