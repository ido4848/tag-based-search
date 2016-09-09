var initDb = require('./db/initDb');
var initSearchEngine = require('../../init');
var models = undefined;

function init(){
  return initDb.init()
    .then(initSearchEngine)
    .then(()=>{
      models = require('./db/models');
      return Promise.resolve();
    });
}

function mainLogic(){
  var book = new models.Book({title:"winnie the poo the"});
  book.save().then((book) => {
    console.log(book);
    var searchEngine = require('../../index');
    searchEngine.search("poo").then((results) => {
      console.log(results);
    });
  });
}

function start(){
  init().then(mainLogic);
}

start();
