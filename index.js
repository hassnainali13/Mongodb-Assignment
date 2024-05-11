
//databsae creat
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://sp22bscs0063:Islamabad@cluster0.rvq6adn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Maju");
  dbo.createCollection("Student", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});

//databsae created