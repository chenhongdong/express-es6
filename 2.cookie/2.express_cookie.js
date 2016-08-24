var express=require('express');
var app=express();
var cookieParser=require('cookie-parser');

app.use(cookieParser());

app.get('/write', function (req,res) {
    res.cookie('name','mi.com');
    res.cookie('age',26);
    res.cookie('email','mrchen1107@163.com',{path:'/read'});
    res.cookie('password','samsung',{expires:new Date(2016,7,15,14,13,00)});
    res.cookie('price',2000,{maxAge:3000});
    res.cookie('user','JJ',{httpOnly:true});

    res.send('写入cookie');
});

app.get('/read', function (req,res) {
    var cookie=req.cookies;
    res.send(cookie);
});

app.get('/visit', function (req,res) {
    var cookie=req.cookies;
    var visit=cookie.visit;

    if(visit){
        visit++;
    }else{
        visit=1;
    }

    res.cookie('visit',visit);
    res.send('今天是第'+visit+'次访问');
});


app.listen(777);