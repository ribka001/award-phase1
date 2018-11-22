const { ArtistCategory, Artist, Vote } = require('../models')

class Voting {

    static homepage(req, res) {
        ArtistCategory.findAll({
            include: [{
                model:Artist
            }]
        })
            .then(data => {
                res.send(data)
            //     Promise.all([
            //         data.findAll({
            //             where: {CategoryId : 1}
            //         }),
            //         data.findAll({
            //             where: {CategoryId : 2}
            //         }),
            //         data.findAll({
            //             where: {CategoryId : 3}
            //         }),
            //         data.findAll({
            //             where: {CategoryId : 4}
            //         }),
            //         data.findAll({
            //             where: {CategoryId : 5}
            //         })
            //     ])
            // })
            // .then(values => {
            //     // res.send(values)
            //     res.render('voting/voting.ejs', {cat1: values[0], cat2: values[1], cat3: values[2], cat4: values[3], cat5: values[4]})
            })
            .catch(err => {
                res.send(err)
            })
    }

    static vote(req,res) {
        
    }
}

module.exports = Voting