const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/";
const dbName = "mydb"

client = new MongoClient(url, {useUnifiedTopology: true});

client.connect(function(err){
    if (err) throw err;
    console.log("connected to server");
    db = client.db(dbName);
    collection = db.collection("customers");
    const myQuery = {address: /^O/};
    collection.deleteMany(myQuery, function(err, obj) {
        if (err) throw err;
        console.log(obj.result.n + " document(s) deleted");
        console.log(obj);
        client.close();
    });
});
