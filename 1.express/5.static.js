var express=require('express');
var app=express();
var path=require('path');

app.use(express.static( path.resolve('public') ));

app.get('/home', function (req,res) {
    res.sendFile('./home.html',{root:__dirname});
})

app.listen(888);