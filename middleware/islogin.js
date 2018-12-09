function islogin(req,res,next) {
    if (!req.session.user) {
        res.redirect('/access/login')
    } else {
        next()
    }
}

module.exports = islogin