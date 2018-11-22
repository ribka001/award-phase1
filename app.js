const express = require('express')
const app = express() 
const port = 3002
const router = require('./routes/index')

app.use(express.urlencoded({extended:false}))
app.use('/',router)
app.listen(port, function() {
    console.log("running on port: "+port)
})