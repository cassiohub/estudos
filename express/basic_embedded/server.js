"use strict"

const app = require("./app");

let port = process.env.PORT || 1337;

let server = app.listen(port, () => {
	console.log("Server listen on port " + port);
});

module.exports = server;
