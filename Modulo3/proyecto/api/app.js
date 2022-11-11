require("dotenv").config();
//para poder leer las variables de entorno
const createError = require("http-errors");
const express = require("express");
const logger = require('morgan');
// morgan es un middleware  que permite ver en la terminal las peticiones, el puerto y lo que ha tardado
const mongoose = require("mongoose");

require("./config/db.config");

const app = express();


// CORS middleware
// Cross Origin request; es decir dice que es una petición con un dominio cruzado 
// el react se está poniendo en un host diferente q el backend 
app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:3000"); // ell navegador dice que si quieres que te hagan peticiones desde otro dominio,en la petición http de respuesta me tienes q devolver esa cabecera
  res.set("Access-Control-Allow-Headers", "content-type");
  res.set("Access-Control-Allow-Methods", "*");// que permites que haga una peticion de get, un post , put y un delete, me tienes q devolver esa cabecera 
  res.set("Access-Control-Allow-Credentials", "true");// con esto al navegador le dice si, aunque sea otro dominio enviame la cookie 
  next();
});


app.use(express.json());
// express por defecto no sabe procesar el body en formato json, necestiamso cargar este midelware para que lo haga

app.use(logger('dev'));
//  este mideelware se encarga de logar todas las peticiones para que tu no tengas que hacer console.log,siempre vamos a tener un app.use de logger en modo dev

const { session, loadUser } = require("./config/session.config");
app.use(session); // este sesion es un midelware, y estos se usan con app.use
//asi le estoy configurando ese midelware para que me haga toda la parte de las cookies de sesion
app.use(loadUser);
//el orden de los midelware si que importa, primero cargamos la información de la cookie de sesion y depués cargamos el usuario

const routes = require('./config/routes.config')
app.use('/api/v1', routes);
// desde que path queremos empezar y le pasamos las routes
//una api rest siempre tiene que estar versionada por lo que el path base en vez de ser /, suele ser /api/v1,
//versionarla es importante para que cuando nuestro software este desplegado en produccion haya un momento en el que podamos evolucionar a v2 y a la par seguir dando un servicio



//Middleware de errors, error.messa ge= route not found, res.json +-=res.render xq esta api solo queremos que devuelva json,
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