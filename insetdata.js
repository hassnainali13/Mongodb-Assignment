var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://sp22bscs0063:Islamabad@cluster0.rvq6adn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Maju");
  var myobj = { name: "Hassnain", ID: "0063" };
  dbo.collection("Student").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log(" inserted DATA");
    db.close();
  });
});

//indert one data 
//inserted DATA