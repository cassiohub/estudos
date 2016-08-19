var fs = require("fs");
var path = require("path");

var dir = process.argv[2];
var fileExt = process.argv[3] || "";

fs.readdir(dir, function(err, files) {
  var filteredFiles = files.filter(function(file){
    if(path.extname(file) == "."+fileExt){
      return file;
    }
  });

  filteredFiles.forEach(function(file){
    console.log(file);
  });
});
