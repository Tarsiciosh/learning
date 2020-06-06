const assert = require ('assert');

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const dbName = "mydb"

client = new MongoClient(url, {useUnifiedTopology: true});

client.connect(function(err){
    if (err) throw err;
    console.log("Connected to server.");
    db = client.db(dbName);
    collection = db.collection("cars");
    collection.drop(function (err, delOK) {
        if (err) throw err;
        //assert.equal(err,null);
        if (delOK) console.log("Collection deleted.")
        client.close();
    });
});

// other option:
//db.dropCollection("cars", function(err, delOK ){
// ...
//})

