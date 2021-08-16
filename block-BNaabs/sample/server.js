var express = require('express')
var logger = require('morgan')
var app = express();


app.use(logger('dev'))
app.get('/', (req,res) => {
    res.sendFile(__dirname + "/index.html") 
})

app.get('/users/:username' , (req,res) => {
    var username = req.params.username
    res.send(username);
})

app.listen(4000, () => {
    console.log('server is listening on port 3k')
})
