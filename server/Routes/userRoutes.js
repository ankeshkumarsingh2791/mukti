const express = require('express')
const { loginController, registerController } = require('../controllers/userController')

const router = express.Router()
// login api
router.post('/login', loginController)
// register api
router.post('/register', registerController)

module.exports = express.Router