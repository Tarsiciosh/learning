const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/";
const dbName = "mydb"

client = new MongoClient(url, {useUnifiedTopology: true});

client.connect(function(err){
    if (err) throw err;
    console.log("connected to server");
    db = client.db(dbName);
    collection = db.collection("customers");
    const mySort = {name:1}; // (-1 desc) sorting the results
    const myFilter = {address: /^S/}; //regular expression
    const myProjection = {projection : {_id:0 } } //projection
    collection.find(myFilter, myProjection).sort(mySort).toArray(function(err,data) {
        if (err) throw err;
        console.log(data);
        client.close();
    });
});

