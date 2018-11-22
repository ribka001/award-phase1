const router = require('express').Router()
const AccessController = require('../../controllers/AccessController')

router.get('/register',AccessController.showRegister)
router.post('/register',AccessController.register)
router.get('/login',AccessController.showLogin)
router.post('/login',AccessController.login)

module.exports = router

