var fs = require('fs');

fs.writeFile('mynewfile3.txt','goodbye',function(err){
    if (err) throw err;
    console.log('saved with "write file"')
})

// if the file doesn't exist then it created an empty file
// otherwise it replaces the content