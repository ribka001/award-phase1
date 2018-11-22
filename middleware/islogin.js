function islogin(req,res,next) {
    if (req.sesion.user.id) {
        next()
    } else {
        res.redirect('/access/login')
    }
}

module.exports = islogin