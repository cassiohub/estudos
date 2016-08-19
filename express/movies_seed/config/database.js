"use strict"

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/video");

let db = mongoose.connection;

db.on("error", (err) => {
	console.log("Database error: ", err);
});

db.on("connected", () => {
	console.log("connected to database");
});

db.on("open", () => {
	console.log("Database Connection Opened");
});

module.exports = db;