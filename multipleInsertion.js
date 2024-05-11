var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://sp22bscs0063:Islamabad@cluster0.rvq6adn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Maju");
  var myobj = [
    { name: 'John', ID: '0001'},
    { name: 'Peter', ID: '0002'},
    { name: 'Amy', ID: '0003'},
    { name: 'Hannah', ID: '0004'},
    { name: 'Michael', ID: '0005'},
    { name: 'Sandy', ID: '0006'},
    { name: 'Betty', ID: '0007'},
    { name: 'Richard', ID: '0008'},
    { name: 'Susan', ID: '0009'},
    { name: 'Vicky', ID: '0010'},
  ];
  dbo.collection("Student").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});
//Multiple Data insert
//inserted Data