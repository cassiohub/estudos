"use strict"

const mongoose = require("mongoose");

let modelName  = "Movie";
let collection = "movies";
let schema = new mongoose.Schema({
	title: { type: String, default: "" },
	year:  { type: Number, default: "" },
	type:  { type: String, default: "" },
	slug:  { type: String, default: "" }
});

module.exports = mongoose.model(modelName, schema, collection);
