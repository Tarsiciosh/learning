const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/";
const dbName = "mydb"

client = new MongoClient(url, {useUnifiedTopology: true});

client.connect(function(err){
    if (err) throw err;
    console.log("Connected to server.");
    db = client.db(dbName);
    collection = db.collection("customers");
    //var myQuery = { address: /^S/ };
    //var newValues = { $set: {name: "Minnie"}};
    collection.find().limit(5).toArray(function (err, res) {
        if (err) throw err;
        console.log(res);
        client.close();
    });
});