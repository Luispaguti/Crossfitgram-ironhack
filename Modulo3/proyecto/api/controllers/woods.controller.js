const Wood = require("../models/wood.model")
const Comment = require("../models/comment.model")
const Like = require("../models/like.model")
const DisLike = require("../models/dislike.model")
// const Warning = require("../models/warning.model")
const createError = require("http-errors");



module.exports.list = (req, res, next) => {
  Wood.find()
    .populate("author" ) // con esto puedo ver toda la información del author
    .populate("likes")
    .then((wood) => res.json(wood))
    .catch((error) => next(error));
};

module.exports.create = (req, res, next) => {
  const wood = req.body;
  //ahora mismo stream es todo, todos los campos del modelo y ahora lo que no quiero que vaya lo quito con delete.
  // de esta manera no se lo estoy borrando al body se lo estoy borrando al stream
  delete wood.views;
  //delete se está calzando una propiedad de un objeto
  wood.author = req.user.id //para llegar a esta acción tengo que estar autenticado xq lo dice mi fichero de rutas,y eso significa que exista el req.user,y en el author a nivel de base de datos se guarda el id ,pues ahi le caso el req.user.id 
  if (req.file) { // gracias a utilizar el midelware de multer te coge la imagen y te la mete en req.file, eso te lo hace el 
    wood.image = req.file.path;// aqui guardo en wood.image el path
  }// el path es la url donde esta la clave de la imagen guardada en cloudinary, el path te lo dan cloudinary
  Wood.create(wood)
    .then((wood) => res.status(201).json(wood))
    .catch(next);
};

module.exports.detail = (req, res, next) => {
  Wood.findById(req.params.id) //xq el id me va en la url y cuando lo tenga..
    .populate("author") // con esto puedo ver toda la información del author, el segundo parametro indico los campos que me quiero quedar, esto se llama proyectar una query
    .populate({
      path: "comments",
      populate: {
        path: "user",
      },
    })// gracias al virtual populate del modelo de stream
    .populate("likes")
    .populate("dislikes")  // gracias al virtual populate del modelo de stream
    .then((wood) => {
      if (wood) {
        res.json(wood);
      } else {
        next(createError(404, "woodd not found"));
      }
    })
    .catch(next);
};


module.exports.delete = (req, res, next) => {
  Wood.deleteOne({ _id: req.stream.id }) // al igual que con el update gracias al middelware stream.mid, puedo hacer un  Stream.deleteOne por el campo id,  y el_id lo saco req.stream.id
    .then(() => res.status(204).send())
    .catch(next);
}

module.exports.like = (req, res, next) => {
  const info = {
    user: req.user.id,// el user es el campo del modelo like, y req.user.id es el que está logado
    wood: req.params.id, //el wood:  es el campo del modelo like,  req.params.id este wood va a ser el del path
  };

  Like.findOne(info) // lo busco y pueden pasar dos cosas
    .then((like) => {
      if (like) { // si existe lo borro
        return Like.deleteOne(info);
      } else { // que no existe, lo creo
        return Like.create(info);
      }
    })
    .then(() => Like.count(info)) // esto es igual que hacer un find y ver cuantos hay 
    .then((likes) => res.json({ likes }))
    .catch(next);
};

module.exports.dislike = (req, res, next) => {
  const info = {
    user: req.user.id,// el user es el campo del modelo like, y req.user.id es el que está logado
    wood: req.params.id, //el wood:  es el campo del modelo like,  req.params.id este wood va a ser el del path
  };

  DisLike.findOne(info) // lo busco y pueden pasar dos cosas
    .then((dislike) => {
      if (dislike) { // si existe lo borro
        return DisLike.deleteOne(info);
      } else { // que no existe, lo creo
        return DisLike.create(info);
      }
    })
    .then(() => DisLike.count(info)) // esto es igual que hacer un find y ver cuantos hay 
    .then((dislikes) => res.json({ dislikes }))
    .catch(next);
};

module.exports.verif = (req, res, next) => {
  const wood = req.params.id;

  Wood.findByIdAndUpdate(wood,{verif:true},{new:true}) // primer argumento wood, segundo el campo que quieres modificar y tercero a que lo quuieres cambiar 
  .then((wood) => res.json( wood ))
  .catch(next);
}

module.exports.warnin = (req, res, next) => {
  const wood = req.params.id;

  Wood.findByIdAndUpdate(wood,{warnin:true},{new:true}) // primer argumento wood, segundo el campo que quieres modificar y tercero a que lo quuieres cambiar 
  .then((wood) => res.json( wood ))
  .catch(next);
}

  module.exports.ranking = (req, res, next) => {
    Wood.find()
      .populate("author", "name")
      .sort({ score: -1 })
      .limit(10)
      .then((wood) => res.status(201).json(wood))
      .catch(next);
  }


