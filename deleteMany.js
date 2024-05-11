var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://sp22bscs0063:Islamabad@cluster0.rvq6adn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Maju");

  // Delete all documents from the "Student" collection
  dbo.collection("Student").deleteMany({}, function(err, obj) {
    if (err) throw err;
    console.log(obj.deletedCount + " document(s) deleted");
    db.close();
  });
});//delete for all data
