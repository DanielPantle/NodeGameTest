
var express = require('express');
var app = express();

var path = require('path');
app.set('port', process.env.PORT || 8000);

// Client-Code liegt im Ordner 'public'
app.use(express.static('public'));
app.use('/nodejs', express.static(__dirname + '/../public'));

module.exports = app;
