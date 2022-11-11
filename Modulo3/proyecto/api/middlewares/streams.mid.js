// middleware para conseguir que el update y el delete me deje hacerlo si el recurso es mio.Para ello tengo que ver que el usuario logado coincida con el usuario de creación 
//  coges el req.user.id y comparas que el stream que te está llegando el campo author es igual. si es igual puedes sino no
const Stream = require('../models/stream.model');
const createError = require('http-errors');
const Comment = require("../models/comment.model");


module.exports.isAuthorByUser = ( req, res, next) => {
  const { id } = req.params; // el identificador de ese stream va a estar siempre en el path 
  Stream.findById(id)
  .then(stream => {
    if (stream?.author == req.user?.id) { // con ? resuelvo si stream es undefine , así resuelvo ese bugs, ASK
      req.stream = stream; // me quedo el stream  así no lo ttengo que ir a buscar en el siguiente controlador
      next(); // en el caso de que sea igual te dejo pasar 
// si no es igual pueden pasar dos cosas; que no exista en el stream o que no pertenezca al usuario

    } else if (stream) {
      next(createError(403, 'no autorizado'))
      // en este else sabemos que no es del usuario
      // por lo q en este else if si hay stream el tipo de error es forbiden
    } else {
      next(createError(404, 'Stream not found'))
      // en este else , es el caso de que no existe
    }
  })
  .catch(next)
}

//ahora utilizo este middelware en la routas



module.exports.isCommentOwnedByAuthor = (req, res, next) => {
  // coger del params el id del comentario 
  const { commentId } = req.params;
// ahora busco el comentario que tiene ese id, 
  Comment.findById(commentId)
    .then((comment) => {
      if (comment) {
        // si existe el comentario tengo que chequear que eres el que lo has escrito
        if (comment.user == req.user.id) {
          // en el caso de que sean iguales me lo guardo en req.coment
          req.comment = comment;
          next();
        } else {
          next(createError(403, "No lo puedes borrar"));
        }
      } else {
        //  que no he encontrado el comentario 404
        next(createError(404, "Stream not found"));
      }
    })
    .catch(next);
};