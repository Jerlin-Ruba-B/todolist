const Joi = require('joi')

const regUserSchema = Joi.object({
    userName:Joi.string().min(3).max(15).required().messages({
        'any.required':"Username field is required",
        'string.empty':"Username field can't be empty",
        "string.min":"Minimum 3 characters are required in username field",
        "string.max":"Maximum 15 characters are allowed in username field"
    }),
    password:Joi.string().required().messages({
        'any.required':"password field is required",
        'string.empty':"password field can't be empty"
    }),
    email:Joi.string().required().email({tlds:{allow:['com','net']}}).messages({
        'any.required':"email field is required",
        'string.empty':"email field can't be empty",
        'string.email':"email format is incorrect"
    })

})

module.exports = {regUserSchema}