//Requerimientos
var express = require('express');
//Inicializo express en la variable app
var app = express();
//Utilizo la funcion listen de express para inicializar el servidor
app.listen(3000, () => {
  console.log('Servidor levantado exitosamente');
})
//Rutas y vistas
app.get('/', (req, res) => {
  res.render('views/index'); //sendFile, renderFile, render, send
});

