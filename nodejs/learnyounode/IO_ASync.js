var fs = require("fs");
var fileName = process.argv[2];

fs.readFile(fileName, "utf-8", function(err, data) {
  if(err) console.log("err: " + err);
  console.log(data.split("\n").length - 1 );
});
