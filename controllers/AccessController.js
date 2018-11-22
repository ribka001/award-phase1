const {User} = require('../models/index')
const crypto = require('crypto')


class AccessController {
    
    static showRegister(req,res) {
        res.render('access/register.ejs')
    }
    
    static register(req,res) {
        let salt = crypto.randomBytes(256)
        let hash = crypto.createHmac('sha256',salt).update(req.body.password).digest('hex')
        let dataUser = {
            username: req.body.username,
            email: req.body.email,
            password:hash,
            salt:salt,
            age:req.body.age,
            createdAt:new Date,
            updatedAt:new Date
        }
        res.send(dataUser)
        // User
        // .create(dataUser)
            // .then((data) => {
                // res.send(data)
            // })
            // .catch((err) => {
                // res.send(err)
            // })

    }

    static showLogin(req,res) {
        res.render('access/login.ejs')
    }

    static login(req,res) {
        let pass = "ec4a11a5568e5cfdb5fbfe7152e8920d7bad864a0645c57fe49046a3e81ec91d"
        let salt = 'abcdef'
        let hash = crypto.createHmac('sha256',salt).update(req.body.password).digest('hex')
        if(hash === pass) {
            res.send(hash+'\n'+pass)
        } else {
            res.send(`gagal login`)
        }
        User
        .findOne({where:{
            email:req.body.email
        }})
            .then((data) => {
                res.send(data)
            })
            .catch((err) => {
                res.send(err)
            })

    }

}

module.exports = AccessController