var request = require("request");

var url = "http://localhost:1337/post/5701dfea83aba3cc7b464202/comment";
var form = {
	"_author":"5701be0e27c7eb997ad6fb35",
	"content":"Nice!"
}

request.post({url: url, form: form, function(err, res, body) {
	console.log(body);
}
});