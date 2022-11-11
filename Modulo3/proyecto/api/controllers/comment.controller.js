const Comment = require("../models/comment.model");
const User = require("../models/user.model");
const createError = require("http-errors");

module.exports.create = (req, res, next) => {
  Comment.create({
    // aqui me cojo los campos que quiero
    text: req.body.text,
    stream: req.params.id,
    user: req.user.id,
  })
    // .populate("user")
    .then((comment) => res.status(201).json(comment))
    .catch(next);
};

module.exports.createW = (req, res, next) => {
  Comment.create({
    // aqui me cojo los campos que quiero
    text: req.body.text,
    wood: req.params.id,
    user: req.user.id,
  })
    // .populate("user")
    .then((comment) => res.status(201).json(comment))
    .catch(next);
};

module.exports.update = (req, res, next) => {
  req.comment.text = req.body.text;

  req.comment
    .save()
    .then((comment) => res.json(comment))
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Comment.deleteOne({ _id: req.comment.id })
    .then(() => res.status(204).send())
    .catch(next);
};


