const User = require("../models/user.model");
const Stream = require("../models/stream.model");
const Wood = require("../models/wood.model");
const createError = require("http-errors");


module.exports.profile = (req, res, next) => {
  res.json(req.user);
};

module.exports.streamsOwned = (req, res, next) => {
  Stream.find({
    author: req.params.id,
  })
  .populate("author", "name") // con esto puedo ver toda la información del author
  .then((streams) => res.json(streams))
  .catch((error) => next(error));
};

module.exports.woodsOwned = (req, res, next) => {
  Wood.find({
    author: req.params.id,
  })
  .populate("author", "name") // con esto puedo ver toda la información del author
  .then((wood) => res.json(wood))
  .catch((error) => next(error));;
};



