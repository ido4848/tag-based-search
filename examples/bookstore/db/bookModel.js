var mongoose = require('mongoose');
var tagBasedSearchEngine = require('../../../index');

var bookSchema = mongoose.Schema({
    title: String,
    auther: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' },
    description: String
});


var Book = mongoose.model('Book', bookSchema);
tagBasedSearchEngine.indexModel(Book);

module.exports = Book;
