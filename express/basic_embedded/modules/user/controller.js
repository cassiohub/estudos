"use strict";

const User = require("./model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

let Controller = {
	query: (req, res) => {
		User.find({}, (err, docs) => {
			if(err) {
				res.json({message: "Couldn't find user."});
			}
			else if(docs.length === 0) {
				res.json({message: "No user found."});	
			}
			else {
				res.json(docs);	
			}
		});
	},
	get: (req, res) => {
		let id = req.params.id;
		User.findOne({ _id: id }, (err, user) => {
			if(err) res.json({message: "Couldn't find user."});
			res.json(user);
		});
	},
	getProfile: (req, res) => {
		let id = req.params.id;
		User.findOne({ _id: id }, {username: 1, email: 1, name: 1}, (err, user) => {
			if(err) res.json({message: "Couldn't find user."});
			res.json({user: user});
		});
	},
    getSelf: (req, res) => {
        let id = req.tokenDecoded._id;
        console.log(req.headers);
        User.findOne({ _id: id }, {username: 1, email: 1, name: 1}, (err, user) => {
            if(err) res.json({message: "Couldn't find user."});
            res.json({user: user});
        });
    },
	create: (req, res) => {
		let password = req.body.password;
		let salt = bcrypt.genSaltSync(10);
		let hash = bcrypt.hashSync(password, salt);
		
		let user = new User({
			name: req.body.name,
			email: req.body.email,
			username: req.body.username,
			password: hash
		});

		if(req.body.role === undefined) {
			user.role = "ROLE_USER";
		}

		user.save((err, doc) => {
			if(err) {
				if(err.code === 11000) {
					res.json({message: "E-mail or username already in use."});
				}
				else {
					res.json({message: "Couldn't create user."});	
				}
			}
			else {
				res.json({message: "User created."});
			}
		})
	},
	update: (req, res) => {
		let id = req.params.id;
		let user = req.body;
		User.update({_id: id}, {$set: user}, (err, docs) => {
			if(err) {
				res.json({message: "Couldn't update user."});
			}
			else {
				res.json({message: "User updated."});
			}
		});
	},
	delete: (req, res) => {
		let id = req.params.id;
		User.remove({_id: id}, (err, doc) => {
			if(err) {
				res.json({message: "Couldn't delete user."});
			}
			else {
				res.json({message: "User deleted."});
			}
		});
	}
};

module.exports = Controller;