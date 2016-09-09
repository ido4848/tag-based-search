var mongoose = require('mongoose');
var tagBasedSearch = require('../../../index');

var authorSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    country: String,
    age: Number,
    bornDate: Date
});

tagBasedSearch.indexSchema(authorSchema);

module.exports = mongoose.model('Author', authorSchema);
