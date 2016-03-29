'use strict'

var router = require("express").Router();
var movies = require("../controller/movies");

router.get("/", movies.getAll);
router.post("/movie/addOne", movies.addOne);
router.get("/movie/:id", movies.getById);
router.get("/add", movies.create);
router.delete("/:id", movies.deleteMovie);
router.get("/delete/:id", movies.deleteMovie);
router.get("/title/:title", movies.getByTitle);
router.get("/edit/:id", movies.updateFromForm);
router.post("/edit/:id", movies.updateOne);


module.exports = router;