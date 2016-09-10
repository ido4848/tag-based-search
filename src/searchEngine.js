var searchEngine = {
  initialized: false,

  init: function(options) {
    options = options ? options : {};
    try {
      require('./searchTagModel');
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
    return require('./indexModel');
  },

  get search(){
    if(!initialized){
      throw new Error("Search engine was initialized!");
    }
    return require('./search');
  }

}

module.exports = searchEngine;