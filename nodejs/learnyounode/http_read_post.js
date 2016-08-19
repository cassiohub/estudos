var http = require("http");
var mapStream = require("through2-map");

var port = process.argv[2];

var server = http.createServer(function(req, res) {
	if(req.method !== "POST")
		return res.send("Not a Post");

	req
		.pipe(mapStream(chunck => chunck.toString().toUpperCase()))
		.pipe(res);
});

server.listen(port);