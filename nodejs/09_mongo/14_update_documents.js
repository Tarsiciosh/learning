//import assert from 'assert';
//import {MongoClient} from 'mongodb';
const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/";
const dbName = "mydb"

client = new MongoClient(url, {useUnifiedTopology: true});

client.connect(function(err){
    if (err) throw err;
    console.log("Connected to server.");
    db = client.db(dbName);
    collection = db.collection("customers");
    var myQuery = { address: /^S/ };
    var newValues = { $set: {name: "Minnie"}};
    collection.updateMany(myQuery, newValues, function (err, res) {
        if (err) throw err;
        console.log(res.result.nModified + " document(s) updated");
        console.log(res.result);
        client.close();
    });
});