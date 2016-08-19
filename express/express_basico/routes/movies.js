var express = require("express");
var router = express.Router();
var Movie = require("../model/Movie");

var logErrors = require("../middleware/logErrors");

router.get("/", function(req, res){
	/* 
	 =============================================================
	 Query passed to find() can be a string or a object
	 It's either the second paramenter or a chained select() call
	 =============================================================
	   String ('-' omit field)
		var fields = "title year -_id";
	   Object (1: show field | 0: omit field)
	   	var fields = {"title": 1, "year": 1, "_id": 0};
	 =============================================================
	*/
	var fields = {"title": 1, "year": 1, "_id": 0};
	/*Movie.find({}, fields, function(err, movies) {
		res.json(movies);
	});*/

	/* Chained select() call and using exec() as callback */
	Movie.find({}).select(fields).exec(function(err, movies){
		res.json(movies);
	});
});

router.get("/:year", function(req, res, next) {
	console.log(req.originalUrl);
	next();
  }, function(req, res, next) {
  	console.log(req.method);
  	next();
  }, function(req, res, next) {
  	Movie.find({year: req.params.year}, function(err, movies) {
  		res.json(movies);
  	});
});

router.get("/title/:title", function(req, res, next) {
	//var title = unescape(req.params.title);
	var title = req.params.title.replace(/\-/g, " ");
	console.log(title);
	Movie.find({title: {$regex: title, $options: "i"}}, {title: 1, _id: 0}, function(err, movie){
		if(err) return logErrors(err);

		// find will return a promise with all documents found
		res.json(movie);
	});
})

module.exports = router;