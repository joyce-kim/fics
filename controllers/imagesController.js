const db = require("../models");

// Defining methods for the imagesController
module.exports = {
  findAll: function(req, res) {
    db.Image
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Image
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};


// express.get("/api/images", function(req, res) {
//   db.Image.find({})
//     .then(function(dbImage) {
//       res.json(dbImage);
//     })
//     .catch(function(err) {
//       res.json(err);
//     });
//   });

// express.post("/api/images", function(req, res) {
//   db.Image
//     .create(req.body)
//     .catch(function(err) {
//       res.json(err);
//     });
// });