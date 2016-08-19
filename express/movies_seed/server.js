"use strict"

const app  = require("./app");
const port = process.env.PORT || 3000;

let server = app.listen(3000, (err) => {
	console.log("Server listen on http://localhost:" + port);
});

module.exports = server;