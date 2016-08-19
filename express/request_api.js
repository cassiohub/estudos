var request = require("request");

request.get("http://localhost:1337/", function(err, data){
	console.log(data);
});
