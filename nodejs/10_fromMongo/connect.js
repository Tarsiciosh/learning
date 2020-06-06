const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myProject';

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

// Use connect method to connect to the Server
client.connect(function(err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    
    const db = client.db(dbName);

    docs = [{a : 7}, {b : 1}];
    insertDocuments (db, docs, function(){
    });

    filter = {};  //{"a": 3};   
    findDocuments(db, filter, function () {
        client.close();
    });

    
});

const insertDocuments = function(db,docs, callback) {
    // Get the documents collection
    const collection = db.collection('documents');
    // Insert some documents
    collection.insertMany(docs, function(err, result) {
        assert.equal(err, null);
        assert.equal(docs.length, result.result.n);
        assert.equal(docs.length, result.ops.length);
        console.log("Inserted " + docs.length + " documents into the collection" );
        callback(result);
    });  
 }

 const findDocuments = function(db, filter, callback) {
    //get the documents collection
    const collection = db.collection("documents");
    //find some documents
    collection.find(filter).toArray(function(err, docs){
        if (err) throw err;
        assert.equal (err, null);
        console.log("Found the following records");
        console.log(docs);
        callback(docs);
    });
 }

 //const updateDocument = function(db, callback)


