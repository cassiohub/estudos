"use strict"

const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("client-sessions");
const bcrypt = require("bcryptjs");
const csrf = require("csurf");

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/auth");

const userSchema = new mongoose.Schema({
	id: mongoose.Schema.ObjectId,
	name: {type: String, default: ""},
	email: {type: String, unique: true},
	password: {type: String, default: ""}
});

let User = mongoose.model("User", userSchema);

let app = express();

app.set('view engine', 'jade');
app.set("views", path.join(__dirname, "views"));

app.use(session({
	cookieName: "session",
	secret: "haeuaheuaheuahea",
	duration: 30 * 60 * 1000,
	activeDuration: 5 * 60 * 1000,
	httpOnly: true,
	ephemeral: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());
app.use(cookieParser());
//app.use(csrf());

app.use((req, res, next) => {
	if(req.session && req.session.user) {
		let query = { email: req.session.user };
		User.findOne(query, (err, user) => {
			if(user) {
				req.user = user;
				req.session.user = user.email;
				res.locals.user = user;
			}
			next();
		});
	}
	else {
		next();
	}
});

function isLogged(req, res, next) {
	if(!req.user) {
		res.redirect("/login");
	}
	else {
		next();
	}
}

let router = express.Router();

router.get("/", (req, res, next) => {
	res.render("index");
});

router.get("/login", (req, res, next) => {
	if(req.session && req.session.user){
		res.redirect("/dashboard");
	}
	else {
		res.render("login"/*, {csrfToken: req.csrfToken()}*/);
	}
});

router.post("/login", (req, res, next) => {
	let email = req.body.email;
	let query = {email: email};
	User.findOne(query, (err, user) => {
		if(!user) {
			let error = "Invalid user/password! No user found"
			res.render("login", {error: error});
		}
		else {
			if(bcrypt.compareSync(req.body.password, user.password)) {
				req.session.user = user.email;
				res.redirect("/dashboard");
			}
			else {
				let error = "Invalid user/password! Wrong Password"
				res.render("login", {error: error});
			}
		}
	});
});

router.get("/logout", (req, res, next) => {
	req.session.reset();
	res.redirect("/");
});

router.get("/register", (req, res, next) => {
	res.render("register"/*, {csrfToken: req.csrfToken()}*/);
});

router.post("/register", (req, res, next) => {
	let password = req.body.password;
	let salt = bcrypt.genSaltSync(10);
	let hash = bcrypt.hashSync(password, salt);

	let user = new User({
		name: req.body.name,
		email: req.body.email,
		password: hash
	});

	user.save(function(err, user) {
		if(err) {
			var error = "An error occured!";

			if(err.code === 11000) {
				error = "This email is already registred! Use another.";
			}

			res.render("register", {error: error});
		}
		else {
			req.session.user = user.email;
			res.redirect("/dashboard");
		}
	});
});

router.get("/dashboard", isLogged, (req, res, next) => {
	/*
		- This become optional after adding the isLogger middleware - 
	if(req.session && req.session.user) {
	*/
		console.log(req.session);
		let query = { email: req.session.user };

		User.findOne(query, (err, user) => {
			if(!user) {
				req.session.reset();
				res.redirect("/login");
			}
			else {
				res.render("dashboard", {user: user});	
			}
		});
	/*}
	else {
		res.redirect("/login");
	}*/
});

app.use("/", router);

let port = process.env.PORT || 3000
let server = app.listen(port, () => {
	console.log("Server listen on http://localhost:"+port);
});