var url = require('url');

var adr = 'http://localhost:8080/default.html?year=2017&month=february';
var q = url.parse(adr, true);

console.log(q.host); //localhost:8080 
console.log(q.pathname); //default.html
console.log(q.search); //?year=2017&month=february
var qdata = q.query; 
console.log(qdata.month); // february

