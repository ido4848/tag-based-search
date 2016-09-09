var mongoose = require('mongoose');

var searchTagSchema = mongoose.Schema({
    word: {type:String, required: true},
    matching: [{ matchId: mongoose.Schema.Types.ObjectId, model: String}]
});

searchTagSchema.index({ word: 1 }, { unique: true });

module.exports = mongoose.model('SearchTag', searchTagSchema);
