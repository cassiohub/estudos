var mongoose = require("mongoose");
var dotenv = require("dotenv").config();

mongoose.connect(process.env.DBURI + "/video");
var db = mongoose.connection;

db.on("error", function(err) {
	console.error(err);
});
db.on("open", function(){
	console.log("connected to mongodb://" + db.host+":"+db.port+"/"+db.name);
});
