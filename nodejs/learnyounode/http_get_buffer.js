var http = require("http");
var concat = require("concat-stream");

// Normal Way
/*http.get(process.argv[2], function(response) {
	var result = "";
	response.on("data", function(data) {
		result += data;
	}).on("end", function() {
		console.log(result.length);
		console.log(result);
	});
});*/


// Using concat and Stream
http.get(process.argv[2], function(response) {
	response.pipe(concat(function(data) {
		data = data.toString();
		console.log(data.length);
		console.log(data);
	}));
});