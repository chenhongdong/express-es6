var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var path=require('path');
var cookieParser = require('cookie-parser');

app.set('view engine','html');
app.set('views',path.resolve('views'));
app.engine('html',require('ejs').__express);

app.use(express.static(path.resolve('public')));

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));

app.use(function (req,res,next) {
    res.locals.label='至少还有你';
    next();
});

app.get('/', function (req,res) {
    res.render('index',{
        title:'新浪网',
        main:'<a href="/login">请登录</a>'
    })
});

app.get('/login', function (req,res) {
    res.render('login')
});

app.post('/login', function (req,res) {
    var body=req.body;

    if(body.username=='chd' && body.password=='samsung'){
        res.cookie('username',body.username);
        res.redirect('/user');
    }else{
        res.redirect('/login');
    }
});

app.get('/user', function (req,res) {
    res.render('user',{
        title:'用户列表',
        username:req.cookies.username
    })
});

app.listen(9999);