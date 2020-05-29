
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const dbName = "mydb"

client = new MongoClient(url, {useUnifiedTopology: true});

client.connect(function(err){
    if (err) throw err;
    console.log("connected to server");
    db = client.db(dbName);
    client.close();
});

// mydb is the database to be created
// MongoDB waits until you have created a collection(table),
// with at least one document (record) before it actually
// creates the database (and collection).

/*
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err,db) {
    if (err) throw err;
    console.log('Database created!');
    db.close();
})
*/


// mydb is the database to be created
// MongoDB waits until you have created a collection(table),
// with at least one document (record) before it actually
// creates the database (and collection).
