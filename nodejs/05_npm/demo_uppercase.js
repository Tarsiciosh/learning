var http = require('http');
var uc = require('upper-case');

http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write(uc.upperCase("hello world"));
    res.end();
}).listen(8080);


// $ /github/learning/nodejs/npm install upper-case

// http://localhost:8080/ -> HELLO WORLD
