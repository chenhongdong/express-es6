var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');

app.use(cookieParser('abc'));

app.get('/in', function (req,res) {
    var music = encodeURIComponent('无可取代');
    console.log(music)
    res.cookie('music','无可取代',{signed:true});

    res.send('写入')
});

app.get('/out', function (req,res) {
    var cookie=decodeURIComponent(req.cookies.music);
    console.log(cookie);
    res.send(req.signedCookies);
});

app.listen(9999);