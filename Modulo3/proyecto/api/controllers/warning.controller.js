const Warning = require("../models/warning.model");
const User = require("../models/user.model");
const createError = require("http-errors");

// module.exports.create = (req, res, next) => {
//   const user = req.params.id;
//   Warning.findByIdAndUpdate({
//     // aqui me cojo los campos que quiero
//     text: req.body.text,
//     user: req.params.id,
//   })
//     .then((warning) => res.status(201).json(warning))
//     .catch(next);
// };

module.exports.create = (req, res, next) => {
  const user = req.params.id;

  User.findByIdAndUpdate(user,{warnin:true},{new:true}) // primer argumento wood, segundo el campo que quieres modificar y tercero a que lo quuieres cambiar 
  .then((user) => res.json( user ))
  .catch(next);
}


module.exports.update = (req, res, next) => {
  req.warning.reason = req.body.reason;

  req.warning
    .save()
    .then((warning) => res.json(warning))
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Warning.deleteOne({ _id: req.warning.id })
    .then(() => res.status(204).send())
    .catch(next);
};

// module.exports.warning = (req, res, next) => {
//   const detail = {
//     user: req.user.id,// el user es el campo del modelo like, y req.user.id es el que está logado
//   };

//   Warning.findOne(detail) // lo busco y pueden pasar dos cosas
//     .then((warning) => {
//       if (warning) { // si existe lo borro
//         return Warning.deleteOne(detail);
//       } else { // que no existe, lo creo
//         return Warning.create(detail);
//       }
//     })
//     .then(() => Warning.count(detail)) // esto es igual que hacer un find y ver cuantos hay 
//     .then((warning) => res.json({ likes }))
//     .catch(next);
// };