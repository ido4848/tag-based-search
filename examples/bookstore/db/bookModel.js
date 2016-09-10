var mongoose = require('mongoose');
var tagBasedSearch = require('../../../index');

var bookSchema = mongoose.Schema({
    title: String,
    auther: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' },
    description: String
});


var Book = mongoose.model('Book', bookSchema);
tagBasedSearch.indexModel(Book);

module.exports = Book;
