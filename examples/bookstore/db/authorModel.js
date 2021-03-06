var mongoose = require('mongoose');
var tagBasedSearchEngine = require('../../../index');

var authorSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    country: String,
    age: Number,
    bornDate: Date
});

var Author = mongoose.model('Author', authorSchema);
tagBasedSearchEngine.indexModel(Author);

module.exports = Author;
