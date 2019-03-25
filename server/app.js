
var express = require('express');
var expose = require('express-expose');
var app = express();

var path = require('path');
app.set('port', process.env.PORT || 8000);

// Client-Code liegt im Ordner 'public'
app.use(express.static('public'));
app.use('/nodejs', express.static(__dirname + '/../public'));

// Variablen im Client-Code verfügbar machen
var expose = expose(app);
expose.expose('var ClientType = { HOST: 0, PLAYER: 1 };');

module.exports = app;
