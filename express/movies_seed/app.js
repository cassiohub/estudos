"use strict"

const express  = require("express");
const server   = require("./server");
const database = require("./config/database");
const bodyParser = require("body-parser");

let app = express();

let api = {
	movies: require("./modules/movies/routes")
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use("/api/movies", api.movies);

module.exports = app;