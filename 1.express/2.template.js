var express=require('express');
var app=express();
var path=require('path');

app.set('view engine','html');
app.set('views',path.resolve('views'));
app.engine('html',require('ejs').__express);

app.use(express.static(path.resolve('public')));

app.use(function (req,res,next) {
    res.setHeader('Content-Type','text/html;charset=utf-8');
    res.locals.label='音乐之声';
    next();
});

app.get('/', function (req,res) {
    res.render('index',{
        title:'这是首页',
        main:'<a href="/login">登录</a>'
    })
});

 app.get('/login', function (req,res) {
    res.render('login');
 });

 app.get('/user', function (req,res) {
     res.render('user',{
         title:'用户列表',
         username:'依然范特西'
     })
 });

app.listen(9999);