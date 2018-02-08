const router = require("express").Router();
const imagesController = require("../../controllers/imagesController.js");

// Require all models
var db = require("../../models");

router.route("/")
  .get(imagesController.findAll)
  .post(imagesController.create);

module.exports = router;