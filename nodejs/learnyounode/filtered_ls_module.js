var fs = require("fs");
var path = require("path");

function filtering(dir, ext, callback) {
  fs.readdir(dir, function(err, files) {
    if(err) {
      return callback(err);
    }
    else {
      var filteredFiles = files.filter(function(file){
        return path.extname(file) === "." + ext;
      });

      return callback(null, filteredFiles);
    }    
  });
}

module.exports = filtering;
