var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://sp22bscs0063:Islamabad@cluster0.rvq6adn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Maju");
  var myquery = { ID: '0063' };
  dbo.collection("Student").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("data deleted");
    db.close();
  });
}); // delete for one data..
