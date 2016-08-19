var express = require("express");
var router = express().Router;

// require mongoose
var mongoose = require("mongoose");
// create mongodb connection 
mongoose.connect("mongodb://localhost:27017/video");
// save connection object in a variable
var db = mongoose.connection;
// bind connection events
db.on("error", function(err) {
	console.error(err);
});
db.on("open", function(){
	console.log("connected to mongodb://" + db.host+":"+db.port+"/"+db.name);
});

var app = express();

// set view engine 
app.set("view engine", "jade");
// set views folder (default is views)
app.set("views", "./moviesViews");

// serving static files
app.use("/assets", express.static("public"));

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


// creating the server
var server = app.listen(3000, function() {
	console.log("Server on");
});
