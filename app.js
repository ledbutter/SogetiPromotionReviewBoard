﻿var express = require('express');
var pc = require('./PageContent.js');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var port = process.env.PORT || 8085;
app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/Site')));

app.get('/', function(req, res) {
	res.sendFile('/Site/Page.html', {root: __dirname } );
});

app.post('/GetPage', function(req, res) {
	var pageNumber = req.body.pageNumber;
	var contents = new pc(pageNumber);
	console.log("Serving content for: " + contents.title);
	res.send(contents);
});

var server = app.listen(port, function() {
	console.log("Now running Sven's CMB Single Page Web Application");
});
