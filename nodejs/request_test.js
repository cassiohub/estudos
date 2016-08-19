var request = require("request");

var dataReceived;
request('http://www.google.com')
	.on('data', function(data){
		var dataReceived = data;
		printData(dataReceived);
    //console.log(data.toString());
  })
  .on('end', function(){
    console.log("This is the end...");
  });

function printData(data) {
	console.log(data.toString().slice(0, 50));
}