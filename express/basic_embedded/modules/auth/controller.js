"use strict"

const User = require("../user/model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

let Auth = {
    auth: (req, res) => {

        let username = req.body.username;
        let password = req.body.password;

        User.findOne({username: username}, {username:1, password:1, _id:1}, function(err, user) {
            if(err) throw err;

            if(!user) {
                res.json({message: "Wrong credentials"});
            }
            else {
                if(bcrypt.compareSync(password, user.password)) {
                    let salt = bcrypt.genSaltSync(10);
                    let hash = bcrypt.hashSync(user.username, salt);
                    let claim = {
                        iss: "localhost",
                        username: user.username,
                        _id: user._id,
                        jit: hash
                    };
                    let options = {
                        "expiresIn": 3600
                    };
                    let token = jwt.sign(claim, process.env.TOKEN_SECRET, options);
                    res.json({token: token});
                }
                else {
                    res.json({message: "Wrong credentials"});
                }
            }
        });
    },
    checkToken: (req, res, next) => {
        let token = req.body.token || req.query.token || req.headers['x-access-token'];

        if(token) {
            jwt.verify(token, process.env.TOKEN_SECRET, (err, tokenDecoded) => {
                if(err) return res.json(err);
                else {
                    req.tokenDecoded = tokenDecoded;
                    next();
                }
            });

        }
        else {
            res.status(403)
                .send({message: "No token provided"});
        }
    }
};

module.exports = Auth;