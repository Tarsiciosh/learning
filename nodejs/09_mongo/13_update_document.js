const assert = require ('assert');

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const dbName = "mydb"

client = new MongoClient(url, {useUnifiedTopology: true});

client.connect(function(err){
    if (err) throw err;
    console.log("Connected to server.");
    db = client.db(dbName);
    collection = db.collection("customers");
    var myQuery = { address: "Valley 345"};
    var newValues = { $set: {name: "Mickey", adress: "Canyon 123"}};
    collection.updateOne(myQuery, newValues, function (err, delOK) {
        if (err) throw err;
        console.log("1 document updated.");
        client.close();
    });
});