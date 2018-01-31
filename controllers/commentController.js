const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Comment
      .find(req.query)
      .sort({ date: -1 })
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Comment
      .findById(req.params.id)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    const comment = {
      uid: req.params.id,
      commentBody: req.params.commentBody,
      pictureId: req.params.pictureId
    };
    db.Comment
      .create(comment)
      .then(data => res.json(data))
      .catch(console.log(req.params.id));
  },
  update: function(req, res) {
    db.Comment
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Comment
      .findById({ _id: req.params.id })
      .then(data => data.remove())
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  }
};