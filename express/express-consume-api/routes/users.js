"use strict";

var express = require('express');
var router = express.Router();
var request = require("request");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/login", function(req, res) {
   res.render("login");
});

router.post("/login", function(req, res, next) {
    let username = req.body.username;
    let password = req.body.password;
    let options = {
        url:"http://localhost:1337/authenticate",
        form: {
            username: username,
            password: password
        }
    };
    request.post(options, function(err, httpResponse, body){
        let result = JSON.parse(body);
        let token = result.token;
        let hour = 60*60*1000;
        res.clearCookie("token");
        res.cookie("token", token, {maxAge: hour, httpOnly: false});
        res.redirect('dashboard');
    });
});

router.get("/dashboard", function(req, res, next) {
    let options = {
      url: "http://localhost:1337/user/self",
      headers: {
        'x-access-token': req.cookies.token
      }
    };
    request.get(options, (err, response, data) => {
        console.log(JSON.parse(data).user);
      res.render("dashboard", {user: JSON.parse(data).user});
    });
});

module.exports = router;
