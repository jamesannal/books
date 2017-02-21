var Book = require('../book');
var assert = require('assert');

describe('Book', function() {
  var book;

  beforeEach(function() {
    book = new Book({
      title: "A Wise Man's Fear",
      author: "Patrick Rothfuss",
      genre: 'High Fantasy'
    });
  });

  it('should have title', function() {
    assert.equal(film.title, "A Wise Man's Fear");
  });
});
