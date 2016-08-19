"use strict"

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Post = {
	title: {type: String, default: ""},
	content: {type: String, default: ""},
	tags: [],
	publishDate: {type: Date, default: Date.now},
	isPublished: {type: Boolean, default: false},
	comments: [],
	_author: {type: Schema.Types.ObjectId, ref: "User"}
}

let PostSchema = new Schema(Post);

module.exports = mongoose.model("Post", PostSchema);