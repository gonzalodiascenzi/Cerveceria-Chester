//Requerimientos
var express = require('express');

//Express
var app = express();

////////////////////////////////

app.get('/', function(req, res) {
  res.send('Ruta por defecto');
});