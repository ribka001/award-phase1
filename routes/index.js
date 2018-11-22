const router = require('express').Router()
const accessRouter = require('./access/index')

router.get('/',function(req,res) {
    res.render('index.ejs')
})
router.use('/access',accessRouter)

module.exports = router
