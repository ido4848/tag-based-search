var SearchTag = require('./searchTagModel');

module.exports = function(tagName) {
  return SearchTag.findOne({word: tagName})
  .then((tag) => {
    var matching = tag.matching;
    var matchingItems = [];
    var populateArr = [];
    matching.forEach((match) => {
      populateArr.push(()=>{

      });
    })
    return Promise.all(populateArr.map(f => f()))
      .then(() => {
        return Promise.resolve(matching);
      });
  });
}
