"use strict"

const Model = require("./model");

function _create(req, res, next) {
	let data = req.body,
		_model = new Model(data);

	_model.save((err, data) => {
		if (err) {
			console.log(err);
			res.json(err);
		}
		else {
			res.json(req.body);
		}
	});
}

function _retrieve(req, res, next) {
	let query = {};

	Model.find(query, function(err, data) {
		if (err) {
			console.log(err);
			res.json(err);
		}
		else {
			res.json(data);
		}
	});
}

function _get(req, res, next) {
	let query = {
		_id: req.params.id
	}
	console.log(req.xhr)

	Model.findOne(query, function(err, data) {
		if (err){
			console.log(err);
			res.json(err);
		}
		else {
			if(data == null)
				res.sendStatus(404);
			else
				res.json(data);
		}
	});
}

function _update(req, res, next) {
	let query = {_id: req.params.id};
	let fields = req.body;

	let multiple = false;
	let upsert = false;

	Model.update(query, fields, function(err, data) {
		if(err){
			console.log(err);
			res.json(err);
		}
		else {
			res.json(req.body);
		}
	});
}

function _remove(req, res, next) {
	let query = {_id: req.params.id};

	Model.remove(query, function(err, data) {
		if(err){
			console.log(err);
			res.json(err);
		}
		else {
			res.json({message: "Deleted"});
		}
	});
}

let Controller = {
	create: _create,
	retrieve: _retrieve,
	get: _get,
	update: _update,
	remove: _remove
}

module.exports = Controller;