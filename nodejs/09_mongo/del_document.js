const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/";
const dbName = "mydb"

client = new MongoClient(url, {useUnifiedTopology: true});

client.connect(function(err){
    if (err) throw err;
    console.log("connected to server");
    db = client.db(dbName);
    collection = db.collection("customers");
    const myQuery = {address: "Mountain 21"};
    collection.deleteOne(myQuery, function(err, obj) {
        if (err) throw err;
        console.log("document deleted");
        client.close();
    });
});
