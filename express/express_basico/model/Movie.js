var mongoose = require("mongoose");

/*
 Schema
*/
var Schema = mongoose.Schema;

//create movie schema 
// schemas are skeletons of the documents of a collection
// you can specify the collection either here or on the model compilation
// setting the collection here, will override on the model compilation
var movieSchema = new Schema({
	title: String,
	year: Number
}, { collection: "movieDetails" });

/*
	Models 
		- Constructors compiled from our Schema definitions
		- All document creation and retrieval from the database is handled by these models.
*/
// compile the schema into a Model
// mongoose.model receives two parametes
// -- The collection name to be used
// -- The schema to be user
// -- Mongoose will look for a collection named as the plural version of your Model name
var Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;