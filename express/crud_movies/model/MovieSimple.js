'use strict'

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let movie = new Schema({
	"title": String,
	"year": Number,
	"imdb": String,
	"type": String
});

let Movie = mongoose.model("Movie", movie);

module.exports = Movie;