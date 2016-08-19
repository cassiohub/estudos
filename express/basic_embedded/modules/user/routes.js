"use strict"

const UserController = require("./controller");
const Router = require("express").Router();

Router.get("/", UserController.query);
Router.get("/self", UserController.getSelf);
Router.get("/:id", UserController.get);
Router.get("/:id/profile", UserController.getProfile);
Router.post("/add", UserController.create);
Router.put("/:id/update", UserController.update);
Router.delete("/:id/delete", UserController.delete);

module.exports = Router;