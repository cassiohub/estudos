"use strict"

const Comment = require("./model.js");

let Controller = {
	query: (req, res) => {
		Comment.find({}, (err, docs) => {
			if (err) res.json({message: "Couldn't get comments"});
			res.json(docs);
		});
	},
	create: (req, res) => {
		let comment = new Comment(req.body);
		comment.save((err, doc) => {
			if (err) res.json({message: "Couldn't save comments"});
			res.json({message: "Comment created"});
		});
	},
	remove: (req, res) => {
		let comment = req.params.id;
		Comment.remove({_id: id}, (err, doc) => {
			if (err) res.json({message: "Couldn't delete comments"});
			res.json({message: "Comment deleted"});
		});
	}
};

module.exports = Controller;