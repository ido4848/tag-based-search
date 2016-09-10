var SearchTag = require('./searchTagModel');

function search(tagName, options) {
  return SearchTag.findOne({word: tagName})
  .then((tag) => {
    var matching = tag.matching;
    var matchingItems = [];
    var populateArr = [];
    matching.forEach((match) => {
      populateArr.push(() => {
        return SearchTag.populate(match, {path: 'match', model:match.model})
        .then((populatedDoc) => {
          matchingItems.push({match:populatedDoc.match, model:populatedDoc.model});
          return Promise.resolve();
        });
      });
    })
    return Promise.all(populateArr.map(f => f()))
      .then(() => {
        return Promise.resolve(matchingItems);
      });
  });
}

module.exports = function(options){
    return function(tagName){
      return search(tagName, options);
    }
};
