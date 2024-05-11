var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://sp22bscs0063:Hassnain@cluster0.mnaqnhv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Maju");
  var query = { address: "Park Lane 38" };
  dbo.collection("Student").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});