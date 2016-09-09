var mongoose = require('mongoose');
var tagBasedSearch = require('../../../index');

var authorSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    country: String,
    age: Number,
    bornDate: Date
});

var Author = mongoose.model('Author', authorSchema);
tagBasedSearch.indexSchema(Author);

module.exports = Author;
