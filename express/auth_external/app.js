"use strict"

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

let app = express();

app.get("/", (req, res) => {
	res.write("<a href='/login'>Login on instagram</a>");
});

app.get("/login", (req, res) => {
	let clientId = 	"2a804cbec86f41a09defc50b75ceb8ba";
	let redirectURI = "http://localhost:3000/recebeu";

	res.redirect("https://api.instagram.com/oauth/authorize/?client_id="+clientId+"&redirect_uri="+redirectURI+"&response_type=code");
});

app.get("/recebeu", (req, res) => {
	let code = req.query.code;
	let form = {
	  	client_id: '23b5872c62ad40119b37dd15d680394b',
	  	client_secret: '01cf395f02e243ed9ea89d9d132d6f75',
	  	grant_type: 'authorization_code',
	  	redirect_uri: 'http://localhost:3000/recebeu',
	  	code: code
	  }
	
	console.log("chegou aqui dentro");
	
	request.post({
	  url: 'https://api.instagram.com/oauth/access_token',
	  form: form,
	  json: true,
	  function (error, response, body) {
	  	console.log("chegou aqui dentro");
      console.log(body);
	  }
	});

	res.end();
});


let server = app.listen(3000, () => {
	console.log("Listen on 3000");
})