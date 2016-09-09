var mongoose = require('mongoose');

var searchTagSchema = mongoose.Schema({
    word: {type:String, required: true},
    matching: [{ type : mongoose.Schema.Types.ObjectId}]
});

searchTagSchema.index({ word: 1 }, { unique: true });

module.exports = mongoose.model('SearchTag', searchTagSchema);
