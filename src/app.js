const express = require('express');
const path = require('path');
require('dotenv').config({ path: __dirname + '/../.env' });
const routes = require('./routes/index');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('👋 Bienvenido a la API del Gimnasio. Usá las rutas /miembros, /entrenadores, /clases, /membresias, /inscripciones');
});


app.use('/', routes);

const PORT = process.env.PORT || 3080;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});