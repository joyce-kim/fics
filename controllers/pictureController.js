const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Picture
      .find(req.query)
      .sort({ date: -1 })
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Picture
      .findById(req.params.id)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    const picture = {
      uid: req.params.id,
      tags: req.params.tags,
      img: req.params.file
    };
    db.Picture
      .create(picture)
      .then(data => res.json(data))
      .catch(console.log(req.params.id));
  },
  update: function(req, res) {
    db.Picture
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Picture
      .findById({ _id: req.params.id })
      .then(data => data.remove())
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  }
};