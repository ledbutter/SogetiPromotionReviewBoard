var express = require('express');
var pc = require('./PageContent.js');
var app = express();
var bodyParser = require('body-parser');

app.set('view engine', 'jade');
app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.sendFile('/Site/Page.html', {root: __dirname } );
});

app.get('/Scripts/default.js', function(req, res) {
	res.sendFile('/Site/Scripts/default.js', {root: __dirname } );
});

app.get('/style.css', function(req, res) {
	res.sendFile('/Site/style.css', {root: __dirname } );
});

app.post('/GetPage', function(req, res) {
	var pageNumber = req.body.pageNumber;
	var contents = new pc(pageNumber);
	res.send(contents);
});

var server = app.listen(8080, function() {
	
	console.log('Now running Promotion Review Board');
});
