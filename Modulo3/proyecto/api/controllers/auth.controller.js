const createError = require("http-errors");
const User = require("../models/user.model");
const mongoose = require("mongoose");
const { sendEmail } = require('../config/mail.config')



module.exports.register = (req, res, next) => {
  const { email } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (user) {
        next(
          createError(400, {
            message: "User validation failed",
            errors: { email: { message: "User already registered" } },
          })
        );
      } else {
        req.body.image = req.file.path
        return User.create(req.body).then((user) => {
          sendEmail(user);
          res.status(201).json(user);
        }
        
    )}
    })
    .catch(next);
};

module.exports.authenticate = (req, res, next) => {
  function invalidAuthError() {
    next(
      createError(400, {
        message: "User validation failed",
        errors: { email: { message: "Invalid email or password" } },
      })
    );
  }

  const { email, password } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (!user) {
        invalidAuthError();
      } else {
        //si existe , en en modelo de usuario tengo el metodo de checkpasswor, le paso el password en crudo y esto me va a devolver una promesa que med ira si han hecho match o no han hecho match.
        return user.checkPassword(password).then((match) => {
          if (match) {
            // ahora nos queda autenticar, generar esa cookie de sesion , y sobre el req.session vamos a tener un userId que hace referencia al user.id
            req.session.userId = user.id;
            res.status(201).json(user);
          } else {
            invalidAuthError();
          }
        });
      }
    })
    .catch(next);
};

module.exports.logout = (req, res, next) => {
  req.session.destroy(); // de esta manera nos va a eliminar toda esa cookie de sesion
  req.session = null;// pero aún asi me aseguro y la pongo a null
  res.status(204).send();
};

module.exports.slack = (req, res, next) => {
 const profile = req.account; // gracias al slack se que los datos del usuario me llegan en req.account

 User.findOne({ // cuando slack me ha pasado los datos del usuario, 
  //lo que hago es crear ese usuario en mi base de datos si no existe, 
  social: profile.id,// y lo creo con un id que he añadido nuevo que es el id de tu perfil social
})
  .then((user) => {
    if (!user) { // si no existe el usuario, lo creo
      return User.create({// y estos son los datos que le pongo
        name: profile.user.name, // el name es el que viene en el perfil
        social: profile.id, // el id q me da slack
        email: profile.user.email, // el email que viene en el perfil de slack
        password: mongoose.Types.ObjectId(),
      });
    }

    return user; // si existe lo devuelvo
  })
  .then((user) => { // y cuando ya tengo el usuario...
    req.session.userId = user.id; // le pongo la cookie
    res.redirect(process.env.WEB_URL); // esta será la url de react
  })
  .catch(next);
};