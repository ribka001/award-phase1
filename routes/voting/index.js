const router = require('express').Router()
const VotingController = require('../../controllers/VotingController')
const islogin = require('../../middleware/islogin')

router.get('/',VotingController.homepage)

router.post('/:ArtistCategoryId',islogin, VotingController.vote)

router.get('/chart', VotingController.chart1)

module.exports = router

