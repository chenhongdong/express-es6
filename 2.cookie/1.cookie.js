var http=require('http');
var url=require('url');
var fs=require('fs');

http.createServer(function (req,res) {
    var urlObj=url.parse(req.url,true);
    var pathname=urlObj.pathname;

    if (pathname=='/write'){
        res.setHeader('Set-Cookie','name=HTC');
        res.end('ok');
    }else if(pathname=='/read'){
        var cookie=req.headers.cookie;

        res.end(cookie);
    }else{
        res.end('404');
    }
}).listen(99);
