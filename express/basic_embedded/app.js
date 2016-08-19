"use strict"

const express = require("express");
const envs = require("dotenv").config();

const db = require("./db");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


const UserRoutes = require("./modules/user/routes");
const PostRoutes = require("./modules/post/routes");
const Routes = require("./routes");
app.use("/", Routes);
app.use("/user", UserRoutes);
app.use("/post", PostRoutes);

module.exports = app;