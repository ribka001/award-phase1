const Model = require('../models/index')

class AdminController {
    
    static showUser(req,res) {
        Model.User.findAll()
        .then(user => {
            res.render('access/userList.ejs',{data:user})
            // res.send(user)
        })
        .catch(err => {
            res.send(err)
        })
    }

    static delete(req,res) {
        Model.User.destroy({
            where:{
                id:req.params.id
            }
        })
            .then(() => {
                res.redirect('/access/admin')
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = AdminController