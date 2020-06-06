var http = require ('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res){
    if (req.url == '/fileUpload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            var oldPath = files.fileToUpload.path;
            var newPath = './' + files.fileToUpload.name;
            fs.rename(oldPath, newPath, function (err) {
                if (err) throw err;
                res.write ('File uploaded and moved!');
                res.end();
            });
        });
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="fileUpload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="fileToUpload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(8080);
