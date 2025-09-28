const router = require('express').Router()
const UserController = require('../controller/userController')
const {regUserValidate} = require('../middleware/joiValidation')

router.post('/register',regUserValidate,UserController.regUser)

module.exports = router
