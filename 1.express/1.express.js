var express=require('express');
var app=express();

app.use(function (req,res,next) {
    res.setHeader('Content-Type','text/html;charset=utf-8');
    next();
});

app.get('/', function (req,res) {
    res.send('主页')
});

app.get('/user', function (req,res) {
    res.send('用户列表')
});
    
app.listen(8080);