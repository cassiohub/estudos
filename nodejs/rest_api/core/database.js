/* 
	Database connection
*/
(function() {
	"use strict"
	
	const client = require("mongodb").MongoClient;
	let mongodb;

	module.exports = {
		connect: (dburl, callback) => {
			client.connect(dburl, function(err, db){
				if(!err)
					mongodb = db;
				if(callback)
					callback();
			});
		},

		db: () => {
			return mongodb;
		},

		close: () => {
			mongodb.close();
		}
	}
})();


