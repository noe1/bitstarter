var express = require('express');
var fs = require('fs');
var buffer = new Buffer(16);
var app = express.createServer(express.logger());
buffer = fs.readFileSync("index.html");
app.get('/', function(request, response) {
  response.send(buffer.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
