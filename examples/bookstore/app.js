var initDb = require('./db/initDb');
var tagBasedSearchEngine = require('../../index');
var models = undefined;

function init(){
  return initDb.init()
    .then(tagBasedSearchEngine.init)
    .then(()=>{
      models = require('./db/models');
      return Promise.resolve();
    });
}

function mainLogic(){
  var book = new models.Book({title:"winnie the poo the"});
  book.save().then((book) => {
    var searchEngine = require('../../index');
    searchEngine.search("poo").then((results) => {
      console.log("Search results for poo:");
      console.log(results);
    });
  })
  .catch(console.error);
}

function start(){
  init().then(mainLogic);
}

start();
