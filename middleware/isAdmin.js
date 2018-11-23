function isAdmin(req,res,next) {
    if (!req.session.user) {
        res.redirect('/access/login')
    } else {
        if (req.session.user.id === 1) {
            next()
        }
        else {
        res.redirect('/voting')
        }
    }
}

module.exports = isAdmin