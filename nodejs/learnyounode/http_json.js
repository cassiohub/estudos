var http = require("http");
var url  = require("url");
//var query = require("query-string")

var port = process.argv[2];

var server = http.createServer((req, res) => {
	var method = req.method;
	var urlParsed = url.parse(req.url, true);
	var endpoint = urlParsed.pathname;
	
	if(method === "GET") {
		var date = new Date(urlParsed.query.iso);

		if (/\/api\/parsetime/.test(endpoint)) {
			var formatedDate = {
				hour: date.getHours(),
				minute: date.getMinutes(),
				second: date.getSeconds()
			}
		}
		if (/\/api\/unixtime/.test(endpoint)) {
			var formatedDate = {
				unixtime: date.getTime()
			}
		}
		
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end(JSON.stringify(formatedDate));
	}
});

server.listen(port);