var http = require ('http');

//create a server object:
http.createServer(function (req, res) {
    res.writeHead (200,{'Content-Type': 'text/html'});
    res.write('hello again')
    res.end();
}).listen(8080);