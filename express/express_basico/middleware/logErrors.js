var logErrors = function logErrors(err, req, res, next) {
	console.log(err.stack);
	console.log(err.message);
	next(err);
}

module.exports = logErrors;