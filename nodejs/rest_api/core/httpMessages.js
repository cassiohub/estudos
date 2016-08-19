"use strict"

exports.send200 = function(req, res) {
	res.writeHead(200, {'Content-Type': 'application/json'});
  res.end('okay');
};

exports.send404 = function(req, res) {
	console.log("chamou")
	res.writeHead(404, {'Content-Type': 'application/json'});
  res.end('not found');
};
