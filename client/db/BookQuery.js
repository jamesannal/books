var MongoClient = require('mongodb').MongoClient;

var BookQuery = function(){
  this.url = 'mongodb://localhost:27017/books';
};

BookQuery.prototype = {
  all: function(onQueryFinished){
    MongoClient.connect(this.url, function(err, db) {
      if (db) {
        var collection = db.collection('books');
        collection.find().toArray(function(err, docs){
          onQueryFinished(docs);
        });
      }
    });
  }
}

module.exports = BookQuery;