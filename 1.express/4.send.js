var express=require('express');
var app=express();

app.get('/', function (req,res) {
    res.send('首页')
});

app.get('/home', function (req,res) {
    res.send({username:'陈宏冬',age:26})
})

app.get('/arr', function (req,res) {
    res.send([1,2,3,4,5]);
})

app.get('*', function (req,res) {
    res.sendStatus(301);
})

app.listen(888);