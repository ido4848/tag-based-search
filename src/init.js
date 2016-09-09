module.exports = function init(options){
  options = options ? options : {};
  require('./searchTagModel');
  if (!options.quiet) {
    console.log("Tag-based search engine was initiated.");
  }
  return Promise.resolve();
}
