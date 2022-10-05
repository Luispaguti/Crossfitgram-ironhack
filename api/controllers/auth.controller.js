const createError = require("http-errors");
const User = require("../models/user.model");
const mongoose = require("mongoose");



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
        return User.create(req.body).then((user) => res.status(201).json(user));
      }
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