const express = require('express')
const app = express() 
const port = 3002
const router = require('./routes/index')
const session = require('express-session')

app.use(session({
    secret: 'keyboard cat',
    resave: false
}))

app.use(express.urlencoded({extended:false}))
app.use('/',router)
app.listen(port, function() {
    console.log("running on port: "+port)
})