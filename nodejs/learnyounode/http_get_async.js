var http = require('http');
var concat = require('concat-stream');

var urls = [process.argv[2], process.argv[3], process.argv[4]];
var completed = 0;
var allData = [];

urls.forEach((url, index) => {
	http.get(url, function(response) {
		response.pipe(concat(function(data) {
			allData[index] = data.toString();
			completed++;

			if(completed === 3) {
				allData.forEach(x => console.log(x));
			}
		}));
	});
});