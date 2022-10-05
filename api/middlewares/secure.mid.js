// para la creacion y el borrado de los streams solo si estoy authenticado, añado este middleware en mi app

const createError = require('http-errors');

module.exports.isAuthenticated = (req, res, next) => {
  if (req.user) { //si  estamos autenticados lo que va a ocurrir es que req.user exista, xq en session.config.js; req.user= user; hemos cargado a ese usuario
    next()
  } else {//en el caso de que no exista tengo que generar un error
    next(createError(401)) // unauthorize
  }
}


// aqui tendré que hacer el midleware de verify