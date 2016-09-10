var searchEngine = {
  initialized: false,
  options: undefined,
  init: function(options) {
    options = options ? options : {};
    try {
      require('./searchTagModel');
    } catch(e) {
      return Promise.reject(e);
    }
    this.initialized = true;
    this.options = options;
    if (!options.quiet) {
      console.log("Tag-based search engine was initiated.");
    }
    return Promise.resolve();
  },

  get indexModel(){
    if(!this.initialized){
      throw new Error("Search engine was initialized!");
    }
    return require('./indexModel')(this.options);
  },

  get search(){
    if(!this.initialized){
      throw new Error("Search engine was initialized!");
    }
    return require('./search')(this.options);
  }

}

module.exports = searchEngine;
