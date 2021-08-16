var express = require('express');

var app = express()

function logger(req,res,next){
    console.log(req.method , req.url)
    next()
}
app.use(logger)

app.get('/' , (req,res) => {
    res.send('welcome')
})

app.listen(3000 , () => {
    console.log("server is listening on port 3k")
})