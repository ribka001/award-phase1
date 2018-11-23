const { User } = require('../models/index')
const bcrypt = require('bcrypt')


class AccessController {
    
    static showRegister(req,res) {
        res.render('access/register.ejs', {title: "register"})
    }
    
    static register(req,res) {
        User.isUniqueEmail(req.body.email)
            .then(data => {
                if (!data) {
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
                } else {
                res.redirect('/access/register', {title: "register"})
                }
            })
    }

    static showLogin(req,res) {
        res.render('access/login.ejs', {title: "login"})
    }

    static login(req,res) {
        User.findOne({where:{email:req.body.email}})
            .then((data) => {
                if (!data) {
                    res.redirect('/access/login', {title: "login"})
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
                    res.redirect('/access/login', {title: "login"})
                    }
                    
                }
            })
            .catch((err) => {
                res.send(err)
            })
    }
}

module.exports = AccessController