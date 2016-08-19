var filter = require("./filtered_ls_module");

var dir = process.argv[2];
var ext = process.argv[3] || "";

filter(dir, ext, printFoundFiles);

function printFoundFiles(err, files) {
	if(err) {
		return console.log("There was an error: " + err);
	}
	else {
		files.forEach(function(file){
	    console.log(file);
	  });	
	}
}