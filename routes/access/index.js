const router = require('express').Router()
const AccessController = require('../../controllers/AccessController')
const AdminController = require('../../controllers/AdminController')
const isAdmin = require('../../middleware/isAdmin')

router.get('/register',AccessController.showRegister)
router.post('/register',AccessController.register)
router.get('/login',AccessController.showLogin)
router.post('/login',AccessController.login)
router.get('/admin',isAdmin,AdminController.showUser)
router.get('/delete/:id',isAdmin,AdminController.delete)


module.exports = router

