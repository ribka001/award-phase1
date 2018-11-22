const router = require('express').Router()
const VotingController = require('../../controllers/VotingController')

router.get('/',VotingController.homepage)

router.post('/:ArtistCategoryId/:userId', VotingController.vote)

module.exports = router

