const { ArtistCategory, Artist, Vote } = require('../models')
const helper = require('../helpers/thanks')

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
                res.render('voting/voting.ejs', {cat1: values[0], cat2: values[1], cat3: values[2], cat4: values[3], cat5: values[4], title: "Main Vote Area"})
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
                res.redirect(`/voting/chart/${req.params.catId}`)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static chart(req, res) {
        Vote.findAll(
            {   
                include: [{ model:ArtistCategory, include: [{ model:Artist }] }]
            }
        )
            .then(data => {

                let list = data.filter(item => {
                    return item.ArtistCategory.CategoryId == req.params.id
                })

                return list
            })
            .then(values => {
                let names = {}
                values.forEach(item => {
                    let label = item.ArtistCategory.Artist.name
                    if(names[`${label}`]) {names[`${label}`] ++}
                    else names[`${label}`] = 1
                })
                return names
            })
            .then(results => {
                let arrVotes = Object.values(results) 
                let arrArtistName = Object.keys(results)
                let data = {
                    labels: arrArtistName,
                    datasets: [{
                        label: '# of Votes',
                        data: arrVotes,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderWidth: 1
                    }]
                }
                res.render('voting/chart.ejs', {data: data, greeting: helper})
            })
            .catch(err => {
                res.send(err)
            })
    }
    
}


module.exports = Voting