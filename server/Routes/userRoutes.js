const express = require('express')
const { loginController, registerController, AuthController } = require('../controllers/userController')
const AuthMidleware = require('../middlewares/AuthMidleware')

const router = express.Router()
// login api
router.post('/login', loginController)
// register api
router.post('/register', registerController)
// Authentication 

router.post('/getUserData', AuthMidleware,AuthController)
module.exports = express.Router