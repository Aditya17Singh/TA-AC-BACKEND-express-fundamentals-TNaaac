var express = require("express")
var logger = require('morgan')
var app = express();

app.use(logger('dev'));

app.use((req, res, next) => {
    if (req.url === "/admin") {
      return next("Unauthorized");
    }
    next();
  });


app.get('/' , (req,res) => {
    res.send('Welcome')
})

app.get('/about', (req,res) => {
    res.send('Users Page')
})

app.use((req,res,next) =>{
    res.send("page not found")
})

app.use((err,req,res,next) => {
   res.status(500).res.send(err);
})

app.listen(3000 , () => {
    console.log("server is listen on 3k")
})