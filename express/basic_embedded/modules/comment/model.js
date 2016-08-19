"use strict"

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Comment = {
	_author: {type: Schema.Types.ObjectId, ref: "User"},
	content: {type: String, dafault: ""},
	votes: {type: Number, dafault: 0},
	date: {type: Date, default: Date.now }
}

let CommentSchema = new Schema(Comment);

module.exports = mongoose.model("Comment", CommentSchema);