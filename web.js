var express = require('express');
var app = express.createServer(express.logger());
var fs = require('fs');
var buffer = new Buffer(16);
buffer = fs.readFileSync("index.html");
app.get('/', function(request, response) {
  response.send('Hello World 5!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
