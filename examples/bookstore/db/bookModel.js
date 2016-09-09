var mongoose = require('mongoose');
var tagBasedSearch = require('../../../index');

var bookSchema = mongoose.Schema({
    title: String,
    auther: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' },
    description: String
});

tagBasedSearch.indexSchema(bookSchema);

module.exports = mongoose.model('Book', bookSchema);
