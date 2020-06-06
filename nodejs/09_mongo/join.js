const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/";
const dbName = "mydb"

client = new MongoClient(url, {useUnifiedTopology: true});

client.connect(function(err){
    if (err) throw err;
    console.log("Connected to server.");
    db = client.db(dbName);
    //collection = db.collection("orders");
    db.collection("orders").aggregate([
        { $lookup:
            {
                from: 'products',
                localField: 'product_id',
                foreignField: '_id',
                as: 'ordereDetails'
            }
        }
    ]).toArray(function(err,res){
        if (err) throw err;
        console.log(JSON.stringify(res));
        client.close();
    })
});

/*
orders:
[
  { _id: 10, product_id: 2, status: 1 }
]

products
[
  { _id: 1, name: 'Vanilla' },
  { _id: 2, name: 'Chocolate' }, <----
  { _id: 3, name: 'Lemon' }
]
*/