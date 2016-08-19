var requestExpose = function requestExpose(req, res, next) {
	console.dir(req.xhr);
	next();
}

module.exports = requestExpose;