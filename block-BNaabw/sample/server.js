var express = require('express');
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var app = express();

//middleware
app.use(express.json())
app.use(express.urlencoded({express: false}))
app.use(express.static(__dirname + "/public"))
app.use(logger('dev'));
app.use(cookieParser());

//error
app.use((req, res, next) => {
    if (req.url === "/admin") {
       return next("Unauthorized");
    }
     next();
});

//routes
app.get("/" , (req,res) => {
    res.sendFile(__dirname + "/index.html")
})
app.get("/users" , (req,res) => {
    res.sendFile(__dirname + "/new.html")
})


app.use((req,res,next) =>{
    res.send("page not found")
})

app.use((err,req,res,next) => {
   res.status(500).send(err);
})


//listening
app.listen(4000 , () => {
    console.log("server is listening on port 4k");
})
