const { User } = require('../models/index')
const bcrypt = require('bcrypt')


class AccessController {
    
    static showRegister(req,res) {
        res.render('access/register.ejs')
    }
    
    static register(req,res) {
        let dataUser = {
            username: req.body.username,
            email: req.body.email,
            age:req.body.age,
            password: req.body.password,
            createdAt:new Date,
            updatedAt:new Date
        }
        User
        .create(dataUser)
            .then(() => {
                // res.send(dataUser)
                res.redirect('/access/login')
            })
            .catch((err) => {
                res.send(err)
            })
    }

    static showLogin(req,res) {
        res.render('access/login.ejs')
    }

    static login(req,res) {
        User.findOne({where:{email:req.body.email}})
            .then((data) => {
                if (!data) {
                    res.redirect('/access/login')
                } else {
                    if (bcrypt.compareSync(req.body.password,data.password)) {
                        req.session.user = {
                            id: data.id,
                            username: data.username,
                            email: req.body.email
                        }
                        // res.send(req.session.user)
                        res.redirect('/voting')
                    } else {
                    res.redirect('/access/login')
                    }
                    
                }
            })
            .catch((err) => {
                res.send(err)
            })
    }
}

module.exports = AccessController