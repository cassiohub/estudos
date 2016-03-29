'use strict'

var Movie = require("../model/Movie");
var logErrors = require("../middleware/logErrors");

exports.getAll = function(req, res){
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
	var fields = {"title": 1, "year": 1, "type": 1};
	/*Movie.find({}, fields, function(err, movies) {
		res.json(movies);
	});*/

	/* Chained select() call and exec() as callback */
	var q = Movie.find().sort("-year").limit(10).select(fields).exec(function(err, movies){
		movies.map((movie) => {
			movie.slug = movie.title.replace(/ /g, "\-").toLowerCase();
		});
		res.render("movies/list", {movies});
	});
};

exports.addOne = (req, res, next) => {
	let movie = new Movie(req.body);
	console.log(movie);
	if(movie){
		movie.save(function(err, doc) {
			if (err) console.log(err);
			res.redirect("/movies/movie/" + doc._id);
		});
	}
};

exports.create = function create(req, res, next) {
	res.render("movies/add");
}

exports.deleteMovie = function deleteMovie(req, res, next) {
	Movie.findOne({_id: req.params.id}).remove(function(err, deleted){
		console.log("get deleted");
		res.redirect("/movies");
	});
};

exports.getById = function(req, res, next) {
	Movie.find({_id: req.params.id}, function(err, movie) {
		res.render("movies/detail", {movie: movie[0]});
	});
};

exports.getByTitle = function(req, res, next) {
	//var title = unescape(req.params.title);
	var title = req.params.title.replace(/\-/g, " ");
	Movie.find({title: {$regex: title, $options: "i"}}, {title: 1, year:1, type: 1}, function(err, movie){
		if(err) return logErrors(err);

		// find will return a promise with all documents found
		res.render("movies/detail", {movie: movie[0]});
	});
};

exports.updateFromForm = function(req, res, next) {
	Movie.findOne({_id: req.params.id}, function(err, movie){
		res.render("movies/edit", {movie: movie});
	});
};

exports.updateOne = function(req, res, next) {
	Movie.findOne({_id: req.params.id}, function(err, movie) {

		movie.title = req.body.title;
		movie.year = req.body.year;
		movie.type = req.body.type;

		movie.save(function(err, doc) {
			res.redirect("/movies/movie/" + doc._id);
		});
	});
};