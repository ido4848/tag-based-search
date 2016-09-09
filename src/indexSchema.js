/**
 * Created by ido4848 on 13/08/16.
 */

var SearchTag = require('./searchTagModel');
var stopWords = require('./stopWords');

function extractTags(value) {
    if (typeof value != 'string') {
        return;
    }

    var tags = value.split(' ');

    // Remove stop words
    var cleanTags = tags.filter((word)=> {
        return !stopWords.includes(word);
    });

    // Remove duplicates
    var uniqueCleanTags = cleanTags.filter(function (elem, pos) {
        return cleanTags.indexOf(elem) == pos;
    });

    return uniqueCleanTags;
}

function handleNewDocumentTag(model, actualDoc, tagName) {
  return SearchTag.findOne({word: tagName})
    .then((tag) => {
      if (tag) {
        tag.matching.push({matchId: actualDoc._id, model: model.modelName});
        return tag.save();
      } else {
        var newTag = new SearchTag({word: tagName, matching:
           [{matchId: actualDoc._id, model: model.modelName}]});
        return newTag.save();
      }
    });
}

function indexSchemaDocument(model, doc){
  var addTagByKeyArr = [];
  var actualDoc = doc._doc;
  Object.keys(actualDoc).forEach((key) =>{
    addTagByKeyArr.push(() => {
      if (key === "id" || key === "_id" || key === "__v") {
          return Promise.resolve();
      }
      var tags = extractTags(actualDoc[key]);
      if (!tags) {
          return Promise.resolve();
      }
      var addTagArr = [];
      tags.forEach((tag) => {
          addTagArr.push(() => {
              return handleNewDocumentTag(model, actualDoc, tag);
          })
      });
      return Promise.all(addTagArr.map(f => f()));
    });
  });

  return Promise.all(addTagByKeyArr.map(f => f()));
}

module.exports = function (model){
  model.schema.post('save', function(doc, next) {
    indexSchemaDocument(model, doc).then(() =>{
        console.log("Schema document was indexed.");
        next();
    });
  });
}
