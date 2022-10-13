const Warning = require("../models/warning.model");
const User = require("../models/user.model");
const createError = require("http-errors");

module.exports.create = (req, res, next) => {
  Warning.create({
    // aqui me cojo los campos que quiero
    reason: req.body.reason,
    user: req.user.id,
  })
    .then((warning) => res.status(201).json(warning))
    .catch(next);
};

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