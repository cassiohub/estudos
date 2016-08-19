"use strict"

const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let User = {
	name: {type: String, default: ""},
	email: {type: String, default: "", unique: true},
	username: {type: String, default: "", unique: true},
	password: {type: String, dafault: "", unique: true},
	role: {type: String, default: "ROLE_USER"},
	_post: [{type: Schema.Types.ObjectId, ref: "Post"}]
}

let UserSchema = new Schema(User);

// UserSchema.pre("save", (next) => {
// 	if(this.role == undefined) {
// 		this.role = "ROLE_USER";
// 	}
// 	next();
// });

module.exports = mongoose.model("User", UserSchema);
