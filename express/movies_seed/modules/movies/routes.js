"use strict"

const Router = require("express").Router();
const Controller = require("./controller");

// api
Router.post("/", Controller.create);
Router.get("/", Controller.retrieve);
Router.get("/:id", Controller.get);
Router.put("/:id", Controller.update);
Router.delete("/:id", Controller.remove);

module.exports = Router;