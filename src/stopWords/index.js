/**
 * Created by ido4848 on 13/08/16.
 */

var allStopWordsByLang = require('stopwords-json/stopwords-all.json');
var allStopWords = [];
Object.keys(allStopWordsByLang).forEach((lang) => {
  allStopWords = allStopWords.concat(allStopWordsByLang[lang]);
})

module.exports = allStopWords;
