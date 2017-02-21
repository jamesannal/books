var express = require('express');
var app = express();
var bookRouter = express.Router();

var BookQuery = require('../client/db/bookQuery');
var query = new BookQuery();

//book by id
bookRouter.get('/:id', function(req, res){
  res.json(books[req.params.id]);
});

//book index
bookRouter.get('/', function(req, res) {
  query.all(function(results) {
    res.json(results);
  });
});

//book update
bookRouter.put('/:id', function(req, res) {
  var book = new Book({
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre
  });
  books[req.params.id] = book;
  res.json({data: books});
});

//add new book
bookRouter.post('/', function(req, res) {
  var book = new Book({
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre 
  });
  books.push(book);
  res.json({data: books});
});

//delete book
bookRouter.delete('/:id', function(req, res) {
  books.splice(req.params.id, 1);
  res.json({data: books});
});


module.exports = bookRouter;
