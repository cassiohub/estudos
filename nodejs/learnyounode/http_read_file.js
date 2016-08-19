var http = require("http");
var fs = require("fs");

var port = process.argv[2];
var filePath = process.argv[3];

var server = http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type', 'text/plain'});

	var data = fs.createReadStream(filePath);
		data.on("data", function(chunck) {
			res.write(chunck);
		});
		data.on("end", function() {
			res.end();
		});
});

server.listen(port);

// Simple version
/*var server = http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	fs.createReadStream(filePath).pipe(res);
});*/