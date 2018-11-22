const { User } = require('../models/index')
const bcrypt = require('bcrypt')


class AccessController {
    
    static showRegister(req,res) {
        res.render('access/register.ejs')
    }
    
    static register(req,res) {
        const saltRounds = 10
        bcrypt.hash(req.body.password,saltRounds)
            .then((hash) => {
                let dataUser = {
                    username: req.body.username,
                    email: req.body.email,
                    age:req.body.age,
                    password: hash,
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
                bcrypt.compare(req.body.password,data.password)
                    .then(() => {
                        res.redirect('/')
                    })
                    .catch(err => {
                        res.send(err)
                    })
            })
            .catch((err) => {
                res.send(err)
            })
    }
}

module.exports = AccessController