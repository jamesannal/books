var Books = require('../models/books');

var UI = function() {
  var books = new Books();
  books.all(function(result){
    this.render(result);
  }.bind(this));
}

UI.prototype = {
  createText: function(text, label) {
    var p = document.createElement('p');
    p.innerText = label + text;
    return p;
  },

  appendText: function(element, text, label) {
    var pTag = this.createText(text, label);
    element.appendChild(pTag);
  },

  render: function(books) {
    var container = document.getElementById('books');

    for (var book of books) {
      var li = document.createElement('li');
      this.appendText(li, book.title, 'Book: ');
      this.appendText(li, book.author, 'Author: ');
      this.appendText(li, book.genre, 'Genre: ');

      container.appendChild(li);
    }
  }
}

module.exports = UI;
