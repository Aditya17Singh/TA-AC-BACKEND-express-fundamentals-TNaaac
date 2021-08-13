var express = require('express')

var app = express();

app.use((req,res,next) => {
    console.log(req.method,req.url);
    next();
})

app.use(express.json());

app.use(express.urlencoded({ extened: false }));

app.use(express.static(__dirname + '/images'))

app.get('/', (req,res) => {
    res.sendFile(__dirname + "/index.html");
})

app.post('/contact' , (req,res) => {
    console.log(req.body)
})

app.listen(4000, () => {
    console.log('server is listening on port 3k')
})