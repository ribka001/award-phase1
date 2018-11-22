const greeting = () => {    
    return `Thank you for voting ${req.session.user.username}!`
}

module.exports = greeting