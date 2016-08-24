var express=require('express');
var app=express();

app.get('/home', function (req,res) {
    console.log(req.path);          //home
    console.log(req.hostname);      //localhost
    console.log(req.query);         //{username:'chd', age:'26'}
    res.end('home');
});

app.get('/book/:id/:name/:price', function (req,res) {
    console.log(req.params);
    res.send(req.params.id+req.params.name+req.params.price);
})

app.listen(9999);