var express = require('express');
var bodyParser = require('body-parser');
json = require('json-update');

var server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
server.use(express.static(__dirname + '/public'));

var port = 8080;
server.listen(port, function() {
    console.log('server listening on port ' + port);
});

// routes will go here
server.post('/api/comments', function(req, res) {
  json.load('public/src/data.json', function(err, obj) {
    obj.push(req.body);
    json.update('public/src/data.json', obj).then(function(dat) { 
	  res.send(req.body);
	});
  });
  
});
