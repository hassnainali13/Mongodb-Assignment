var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://sp22bscs0063:Hassnain@cluster0.mnaqnhv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Maju");
  dbo.collection('orders').aggregate([
    { $lookup:
       {
         from: 'products',
         localField: 'product_id',
         foreignField: '_id',
         as: 'orderdetails'
       }
     }
    ]).toArray(function(err, res) {
    if (err) throw err;
    console.log(JSON.stringify(res));
    db.close();
  });
});