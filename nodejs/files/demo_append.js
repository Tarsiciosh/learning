var fs = require ('fs');

fs.appendFile('mynewfile1.txt',' This is my text', function(err) {
    if (err) throw err;
    console.log('updated');
});

// if the file doesn't exist it create it 
// otherwise it append the data at the end of the file