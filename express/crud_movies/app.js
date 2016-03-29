var express = require("express");
var router = express().Router;
var bodyParser = require("body-parser");
var path = require("path");
var nib = require("nib");

var db = require("./db");

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// style and public files
var stylus = require("stylus");
function compile(str, path) {
	return stylus(str)
		.set('filename', path)
		.use(nib())
		.import('nib');
}
app.use(stylus.middleware({
	src: path.join(__dirname, "/public"),
	compile: compile
}));
app.use("/public", express.static("public"));


//body-parser middlware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

// custom middleware 
var requestTime = require("./middleware/requestTime");
// using the middleware on every request
app.use(requestTime);

// error handling middleware
var logErrors = require("./middleware/logErrors");
app.use(logErrors);

// request expose middleware
var requestExpose = require("./middleware/requestExpose");
app.use(requestExpose);

// generic request handling. Will catch every request
app.use(function generic(req, res, next) {
	//console.log(req.requestTime);
	//res.status(404).send("cagou tudo");
	next();
});

//require the movies router
var movies = require("./routes/movies");
//using movies route
app.use("/movies", movies);

module.exports = app;

