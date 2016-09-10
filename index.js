var searchEngine = {
  initialized: false,

  init: function(options) {
    options = options ? options : {};
    try {
      require('./src/searchTagModel');
    } catch(e) {
      return Promise.reject(e);
    }
    this.initialized = true;
    if (!options.quiet) {
      console.log("Tag-based search engine was initiated.");
    }
    return Promise.resolve();
  },

  get indexModel(){
    if(!initialized){
      throw new Error("Search engine was initialized!");
    }
    return require('./src/indexModel');
  },

  get search(){
    if(!initialized){
      throw new Error("Search engine was initialized!");
    }
    return require('./src/search');
  }

}

module.exports = searchEngine;
