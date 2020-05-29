var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db){
    if (err) throw err;
    var dbo = db.db("mydb");
    var docArray = [
      { name: 'John', address: 'Highway 71'},
      { name: 'Peter', address: 'Lowstreet 4'},
      { name: 'Amy', address: 'Apple st 652'},
      { name: 'Hannah', address: 'Mountain 21'},
      { name: 'Michael', address: 'Valley 345'},
      { name: 'Sandy', address: 'Ocean blvd 2'},
      { name: 'Betty', address: 'Green Grass 1'},
      { name: 'Richard', address: 'Sky st 331'},
      { name: 'Susan', address: 'One way 98'},
      { name: 'Vicky', address: 'Yellow Garden 2'},
      { name: 'Ben', address: 'Park Lane 38'},
      { name: 'William', address: 'Central st 954'},
      { name: 'Chuck', address: 'Main Road 989'},
      { name: 'Viola', address: 'Sideway 1633'}

        //{_id: 1, name: "Vanilla" },
        //{_id: 2, name: "Chocolate"},
        //{_id: 3, name: "Lemon"}
    ];
    //dbo.collection("customers").insertMany(docArray, function(err, res){
        dbo.collection("customers").insertMany(docArray, function(err, res){
        if (err) throw err;
        //console.log("Number of documents inserted " + res.insertedCount);
        console.log(res);
        db.close();
    })
})

/*
{
  result: { ok: 1, n: 3 },
  ops: [
    {
      name: 'Sandy',
      address: 'Ocean blvd 2',
      _id: 5ec44d8209078c1850a2a211
    },
    {
      name: 'Betty',
      address: 'Green Grass 1',
      _id: 5ec44d8209078c1850a2a212
    },
    {
      name: 'Richard',
      address: 'Sky st 331',
      _id: 5ec44d8209078c1850a2a213
    }
  ],
  insertedCount: 3,
  insertedIds: {
    '0': 5ec44d8209078c1850a2a211,
    '1': 5ec44d8209078c1850a2a212,
    '2': 5ec44d8209078c1850a2a213
  }
}
*/