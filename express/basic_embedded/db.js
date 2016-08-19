"use strict"

const mongoose = require("mongoose");
const envs = require("dotenv").config();

mongoose.connect(process.env.DBURL);
let db = mongoose.connection;

db.on("open", () => {
	console.log("Connected to Database on mongodb://" + db.host+":"+db.port+"/"+db.name);
});

module.exports = db;