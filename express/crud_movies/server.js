var app = require("./app");
var env = require("dotenv").config();

app.set('port', process.env.PORT || 3000);
var port = app.get("port");

// creating the server
var server = app.listen(port, function() {
	console.log("Server listening on http://localhost:"+port);
});