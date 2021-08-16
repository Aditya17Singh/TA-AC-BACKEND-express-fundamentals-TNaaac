var express = require('express');
var logger = require('morgan')
var app = express();

//middleware
app.use(express.json())
app.use(express.urlencoded({express: false}))
app.use(logger('dev'))

app.use((req, res, next) => {
    if (req.url === "/admin") {
       return next("Unauthorized");
    }
     next();
});

//routes
app.get("/" ,(req,res) => {
    res.sendFile(__dirname + "/index.html")
})
app.get("/about" , (req,res) => {
    res.sendFile(__dirname + "/about.html")
})
app.get("/form" , (req,res) => {
    res.sendFile(__dirname + "/form.html")
})
app.post("/form" , (req,res) => {
    console.log(req.body)
    res.json(req.body);
})
 app.get('/users/:username' , (req,res) => {
     var username = req.params.username
     res.send(username);
 })
 app.use((req,res,next) =>{
         res.send("page not found")
 })

app.use((err,req,res,next) => {
   res.status(500).send(err);
})

app.listen(3000 , () => {
    console.log("server is listening on 3k")
})

