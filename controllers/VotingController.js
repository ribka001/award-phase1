const { ArtistCategory, Artist, Vote } = require('../models')

class Voting {

    static homepage(req, res) {
        Promise.all([
            ArtistCategory.findAll(
                {
                    where:{CategoryId:1},
                    include: [{ model:Artist }]
                }
            ),
            ArtistCategory.findAll(
                {
                    where:{CategoryId:2},
                    include: [{ model:Artist }]
                }
            ),
            ArtistCategory.findAll(
                {
                    where:{CategoryId:3},
                    include: [{ model:Artist }]
                }
            ),
            ArtistCategory.findAll(
                {
                    where:{CategoryId:4},
                    include: [{ model:Artist }]
                }
            ),
            ArtistCategory.findAll(
                {
                    where:{CategoryId:5},
                    include: [{ model:Artist }]
                }
            )
        ])
            .then(values => {
                res.render('voting/voting.ejs', {cat1: values[0], cat2: values[1], cat3: values[2], cat4: values[3], cat5: values[4]})
            })
            .catch(err => {
                res.send(err)
            })
    }

    static vote(req,res) {
        Vote.create({
            UserId: req.session.user.id,
            ArtistcategoryId: req.params.ArtistCategoryId
        })
            .then((data) => {
                // req.flash('success_msg', 'Thank you for voting!')
                res.redirect('/')
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = Voting