const router = require('express').Router()
const VotingController = require('../../controllers/VotingController')
const islogin = require('../../middleware/islogin')

router.get('/',VotingController.homepage)

router.post('/:ArtistCategoryId/:catId',islogin, VotingController.vote)

router.get('/chart/:id', VotingController.chart)

module.exports = router

