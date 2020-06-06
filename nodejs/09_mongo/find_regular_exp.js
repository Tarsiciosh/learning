var MongoClient = require('mongodb').MongoClient /*({ useUnifiedTopology: true }) */;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var query = {address: /^S/};
    dbo.collection("customers").find(query).toArray (function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
}); 

