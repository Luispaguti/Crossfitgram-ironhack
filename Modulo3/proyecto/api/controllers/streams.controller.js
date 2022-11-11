const Stream = require("../models/stream.model");
const Like = require("../models/like.model")
const createError = require("http-errors");
const Likeu = require("../models/likeu.model")



module.exports.list = (req, res, next) => {
  Stream.find()
    .populate("author") // con esto puedo ver toda la información del author
    .then((streams) => res.json(streams))
    .catch((error) => next(error));
};

module.exports.create = (req, res, next) => {
  const stream = req.body;
  //ahora mismo stream es todo, todos los campos del modelo y ahora lo que no quiero que vaya lo quito con delete.
  // de esta manera no se lo estoy borrando al body se lo estoy borrando al stream
  delete stream.views;
  //delete se está calzando una propiedad de un objeto
  stream.author = req.user.id //para llegar a esta acción tengo que estar autenticado xq lo dice mi fichero de rutas,
  //y eso significa que exista el req.user,y en el author a nivel de base de datos se guarda el id ,pues ahi le caso el req.user.id 
  console.log(req.file) // gracias a utilizar el midelware de multer te coge la imagen y te la mete en req.file, eso te lo hace el 
  if (req.file) {
    stream.image = req.file.path;
  }// el path es la url donde esta la clave de la imagen guardada en cloudinary, el path te lo dan cloudinary
  Stream.create(stream)
    .then((stream) => res.status(201).json(stream))
    .catch(next);
};

module.exports.detail = (req, res, next) => {
  Stream.findById(req.params.id) //xq el id me va en la url y cuando lo tenga..
  .populate("author") // con esto puedo ver toda la información del author, el segundo parametro indico los campos que me quiero quedar, esto se llama proyectar una query
  .populate({
    path: "comments",
    populate: {
      path: "user",
    },
  }) // gracias al virtual populate del modelo de stream
  .populate("likes")
  .populate("likeus") // gracias al virtual populate del modelo de stream
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
  // ya no tengo que hacer un findbyidandupdate gracias al middelware stream.mid
  const data = req.body;
  delete data.views;
  delete data.author;

  const stream = Object.assign(req.stream, data);
  // con Object.assign le estoy diciendo que le asignes todos los atributos de data, al stream q tengo en la request le añado data 
  stream
    .save()
    .then((stream) => res.json(stream)) // este then siempre va a existir xq no puedo invocar un save de un modelo que no existe
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Stream.deleteOne({ _id: req.stream.id }) // al igual que con el update gracias al middelware stream.mid,
  // puedo hacer un  Stream.deleteOne por el campo id,  y el_id lo saco req.stream.id
    .then(() => res.status(204).send())
    .catch(next);
}

module.exports.like = (req, res, next) => {
  const detail = {
    user: req.user.id,// el user es el campo del modelo like, y req.user.id es el que está logado
    stream: req.params.id, //el stream:  es el campo del modelo like,  req.params.id este stream va a ser el del path
  };

  Like.findOne(detail) // lo busco y pueden pasar dos cosas
    .then((like) => {
      if (like) { // si existe lo borro
        return Like.deleteOne(detail);
      } else { // que no existe, lo creo
        return Like.create(detail);
      }
    })
    .then(() => Like.count(detail)) // esto es igual que hacer un find y ver cuantos hay 
    .then((likes) => res.json({ likes }))
    .catch(next);
};


module.exports.likeu = (req, res, next) => {
  const detail = {
    user: req.user.id,// el user es el campo del modelo like, y req.user.id es el que está logado
    stream: req.params.id, //el stream:  es el campo del modelo like,  req.params.id este stream va a ser el del path
  };

  Likeu.findOne(detail) // lo busco y pueden pasar dos cosas
    .then((likeu) => {
      if (likeu) { // si existe lo borro
        return Likeu.deleteOne(detail);
      } else { // que no existe, lo creo
        return Likeu.create(detail);
      }
    })
    .then(() => Likeu.count(detail)) // esto es igual que hacer un find y ver cuantos hay 
    .then((likeus) => res.json({ likeus }))
    .catch(next);
};