require("dotenv").config();
//para poder leer las variables de entorno
const createError = require("http-errors");
const express = require("express");
const logger = require('morgan');
// morgan es un middleware  que permite ver en la terminal las peticiones, el puerto y lo que ha tardado
const mongoose = require("mongoose");

require("./config/db.config");

const app = express();


app.use(express.json());
// express por defecto no sabe procesar el body en formato json, necestiamso cargar este midelware para que lo haga

app.use(logger('dev'));
// siempre vamos a tener un app.use de logger en modo dev

const routes = require('./config/routes.config')
app.use('/api/v1', routes);
// desde que path queremos empezar y le pasamos las routes
//una api rest siempre tiene que estar versionada por lo que el path base en vez de ser /, suele ser /api/v1,
//versionarla es importante para que cuando nuestro software este desplegado en produccion haya un momento en el que podamos evolucionar a v2 y a la par seguir dando un servicio



//Middleware de errors, error.message= route not found, res.json +-=res.render xq esta api solo queremos que devuelva json,
app.use((req, res, next) => next(createError(404, 'Route not found')))

app.use((error, req, res, next) => {
  const data = {};

  console.error(error);

  if (error instanceof mongoose.Error.ValidationError || error.status === 400) {
    error.status = 400;
    data.errors = error.errors;
  } else if (error instanceof mongoose.Error.CastError) {
    error = createError(404, "Resource not found");
  }

  data.message = error.message;

  res.status(error.status || 500);
  res.send(data);
});




const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`crossfit rss listen at port ${port}`))