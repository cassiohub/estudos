"use strict"

const PostController = require("./controller");
const Router = require("express").Router();

Router.get("/", PostController.query);
Router.get("/:id", PostController.get);
Router.post("/add", PostController.create);
Router.put("/:id/update", PostController.update);
Router.delete("/:id/delete", PostController.delete);

Router.post("/:id/comment", PostController.createComment);
Router.delete("/:id/comment/:commentId", PostController.deleteComment);

module.exports = Router;