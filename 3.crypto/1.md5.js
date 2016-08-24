var crypto=require('crypto');

var md5 = crypto.createHash('md5').update('chd').digest('hex');

console.log(md5)
            