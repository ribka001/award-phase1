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

    // static chart() {
    //     Promise.all([
    //         ArtistCategoryId.findAll(
    //             {
    //                 where:{CategoryId:1},
    //                 include: [{ model:Artist }]
    //             }
    //         ),
    //         ArtistCategoryId.findAll(
    //             {
    //                 where:{CategoryId:2},
    //                 include: [{ model:Artist }]
    //             }
    //         ),
    //         ArtistCategoryId.findAll(
    //             {
    //                 where:{CategoryId:3},
    //                 include: [{ model:Artist }]
    //             }
    //         ),
    //         ArtistCategoryId.findAll(
    //             {
    //                 where:{CategoryId:4},
    //                 include: [{ model:Artist }]
    //             }
    //         ),
    //         ArtistCategory.findAll(
    //             {
    //                 where:{CategoryId:5},
    //                 include: [{ model:Artist }]
    //             }
    //         )
    //     ])
    //         .then(values => {
    //             let income = arrIncome 
    //             let event = arrId
    //             let data = {
    //                 labels: event,
    //                 datasets: [{
    //                     label: '# of Votes',
    //                     data: income,
    //                     backgroundColor: [
    //                         'rgba(255, 99, 132, 0.2)',
    //                         'rgba(54, 162, 235, 0.2)',
    //                         'rgba(255, 206, 86, 0.2)',
    //                         'rgba(75, 192, 192, 0.2)',
    //                         'rgba(153, 102, 255, 0.2)',
    //                         'rgba(255, 159, 64, 0.2)'
    //                     ],
    //                     borderColor: [
    //                         'rgba(255,99,132,1)',
    //                         'rgba(54, 162, 235, 1)',
    //                         'rgba(255, 206, 86, 1)',
    //                         'rgba(75, 192, 192, 0.2)',
    //                         'rgba(153, 102, 255, 0.2)',
    //                         'rgba(255, 159, 64, 0.2)'
    //                     ],
    //                     borderWidth: 1
    //                 }]
    //             }


    //             // res.render('transactions/incomeReport', { title: "chart", data: data })
    //             res.render('voting/chart.ejs', {cat1: values[0], cat2: values[1], cat3: values[2], cat4: values[3], cat5: values[4]})
    //         })
    //         .catch(err => {
    //             res.send(err)
    //         })
            
    // }

    static chart1(req, res) {
        Vote.findAll(
            {   
                include: [{ model:ArtistCategory, include: [{ model:Artist }] }]
            }
        )
            .then(data => {

                let list = data.filter(item => {
                    return item.ArtistCategory.CategoryId == 1
                })

                return list
            })
            .then(values => {
                values.findAll({
                    group: [values.ArtistCategory.Artist.name],
                    attributes: [values.ArtistCategory.Artist.name, [sequelize.fn('COUNT', values.ArtistCategory.Artist.name), 'TagCount']],
                })
            })
            .then(results => {
                res.send(results)
            })
            .catch(err => {
                res.send(err)
            })
    }
    
}

module.exports = Voting