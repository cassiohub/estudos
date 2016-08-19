"use strict";

const Post = require("./model");
const User = require("../user/model");
const Comment = require("../comment/model");

const mongoose = require("mongoose");

let PostController = {
	query: (req, res) => {
		Post.find({}, (err, docs) => {
			if(err || docs.length == 0) {
				res.json({message: "Post not found."});
			}
			else {
				res.json(docs);
			}
		});
	},
	get: (req, res) => {
		let id = req.params.id;

		Post.findOne({_id: id})
			.populate("_author")
			.exec((err, doc) => {
			if(err || doc == undefined) {
				res.json({message: "Post not found."});
			}
			else {
				res.json(docs);
			}
		});
	},
	create: (req, res) => {
		let post = new Post(req.body);

		if(req.body.isPublished !== undefined) {
			post.isPublished = req.body.isPublished;
		}

		post.save((err, doc) => {
			if(err) res.json({message: "Couldn't create post"});
			else {
				let _author = doc._author;
				let post_id = doc._id;
				console.log("_author " + _author);
				console.log("post_id " + post_id);

				User.findOneAndUpdate({_id: _author}, {$push: {_post: post_id}}, (err, doc) => {
					console.log(doc);
					if(err) res.json({message: "Couldn't create post"});
					res.json({message: "Post created"});
				});
			}
		});
	},
	update: (req, res) => {
		let id = req.params.id;

		Post.update({_id: id}, {$set: req.body}, (err, doc) => {
			if(err) res.json({message: "Couldn't update post"});
			res.json({message: "Post updated"});
		});
	},
	delete: (req, res) => {
		let id = req.params.id;

		Post.remove({_id: id}, (err) => {
			if(err) res.json({message: "Couldn't delete post"});
			else {
				//let _author = doc._author;
				let post_id = id;

				User.findOneAndUpdate({}, {$pull: {_posts: post_id}}, (err, doc) => {
					if(err) res.json({message: "Couldn't delete post"});
					res.json({message: "Post deleted"});
				});
			}
		});
	},

	createComment: (req, res) => {
		let postId = req.params.id;
		let comment = new Comment(req.body);
        comment._author = req.tokenDecoded._id;
		comment.votes = 0;

		Post.update({_id: postId}, {$push: {comments: comment}}, (err, doc) => {
			if (err) res.json({message: "Couldn't save comment"});
			else {
				res.json({message: "Comment created"});	
			}
		});
	},
	deleteComment: (req, res) => {
		let postId = req.params.id;
		let commentId = req.params.commentId;

		Post.update({_id: postId}, {$pull: {"comments": {_id: new mongoose.Types.ObjectId(commentId)}}}, (err, doc) => {
			if (err) res.json({message: "Couldn't delete comment"});
			else {
				res.json({message: "Comment deleted"});
			}
		});
	}
};

module.exports = PostController;