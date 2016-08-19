"use strict"
/*
	Use database connection
	CRUD actions
*/
let mongodb = require("../core/database");

exports.list = (query, cb) => {
	var cursor = mongodb.db().collection("employee").find({});
	var employees = [];
	cursor.forEach(
		(doc) => {
		employees.push(doc);
	},
		(err) => {
			cb(employees);		
		}
	);
}