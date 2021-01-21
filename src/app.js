//Requerimientos
var express = require('express');
//Inicializo express en la variable app
var app = express();
//Defino la carpeta con los archivos estaticos (imagenes)
app.use(express.static('public'));
//Utilizo la funcion listen de express para inicializar el servidor
app.listen(3000, () => {
  console.log('Servidor levantado exitosamente');
})
//Rutas y vistas
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html'); //sendFile, renderFile, render, send
});

