const router = require('express').Router()
const accessRouter = require('./access/index')
const voting = require('./voting/index')

router.get('/',function(req,res) {
    res.render('index.ejs', {title: "Homepage"})
})
router.use('/access',accessRouter)
router.use('/voting', voting)

module.exports = router
