"use strict"

const http = require("http");
const httpMessages = require("./httpMessages");

const mongodb = require("../core/database");
let dburl = "mongodb://localhost:27017/company";
mongodb.connect(dburl, function() {
	console.log("Connected to Database");
	mongodb.db();
});

const employee = require("../controller/employee");

const server = http.createServer(function(req, res, callback) {
	
	let method   = req.method;
	let endPoint = req.url;

	switch(method) {
		case "GET":

			if(endPoint === "/employee"){
				let query = {};
				employee.list(query, ).then(function(docs){
					console.log(JSON.stringify(docs));
				});
				//console.log(employees);
				res.end();
				//res.write(employees);
			}
			console.log("GET");
			httpMessages.send200;
			break;

		case "POST":
			console.log("POST");
			let requestBody = "";

			req.on("data", function(data) {
				requestBody += data;
			});

			req.on("end", function() {
				console.log(JSON.parse(requestBody));
			});

			break;

		case "PUT":
			console.log("PUT");
			break;

		case "DELETE":
			console.log("DELETE");
			break;

		default:
			console.log("Error");
	}

	res.end();
});


server.listen(3000, () => {
	console.log("Server listening on port 3000");
});