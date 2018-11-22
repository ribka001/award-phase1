const router = require('express').Router()
const VotingController = require('../../controllers/VotingController')

router.get('/',VotingController.homepage)

router.post('/:ArtistCategoryId', VotingController.vote)

router.get('/chart', VotingController.chart)

module.exports = router

