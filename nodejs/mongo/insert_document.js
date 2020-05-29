var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/"

MongoClient.connect(url, function (err,db){
    if (err) throw err;
    var dbo = db.db("mydb");
    var document = { _id: 10, product_id: 2, status: 1};
    dbo.collection("orders").insertOne(document, function(err, res){
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    })
})

/*
orders:
[
  { _id: 10, product_id: 2, status: 1 }
]
*/
