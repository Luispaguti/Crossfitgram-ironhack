const Stream = require("../models/stream.model");
// const Like = require("../models/like.model");
const createError = require("http-errors");

module.exports.list = (req, res, next) => {
  Stream.find()
    .populate("author", "name email")
    .then((streams) => res.json(streams))
    .catch((error) => next(error));
};

module.exports.create = (req, res, next) => {
  const stream = req.body;
  //ahora mismo stream es todo, todos los campos del modelo y ahora lo que no quiero que vaya lo quito con delete.
  // de esta manera no se lo estoy borrando al body se lo estoy borrando al stream
  delete stream.views;
  //delete se está calzando una propiedad de un objeto

  Stream.create(stream)
    .then((stream) => res.status(201).json(stream))
    .catch(next);
};

module.exports.detail = (req, res, next) => {
  Stream.findById(req.params.id) //xq el id me va en la url y cuando lo tenga..
  .then((stream) => {
    if (stream) {
      res.json(stream);
    } else {
      next(createError(404, "stream not found"));
    }
  })
  .catch(next);
};

module.exports.update = (req, res, next) => {
  const data = req.body;
  delete data.views;
  delete data.author;

  const stream = Object.assign(req.stream, data);
  // con Object.assign le estoy diciendo que le asignes todos los atributos de data
  stream
    .save()
    .then((stream) => res.json(stream))
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Stream.findByIdAndDelete(req.params.id)
    .then((stream) => {
      if (stream) {
        res.status(204).send()
      } else {
        next(createError(404, "stream not found"));
      }
    })
    .catch(next);
}
