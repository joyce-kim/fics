const router = require("express").Router();
const imagesController = require("../../controllers/imagesController");

// Matches with "/api/books"
router.route("/")
  .get(imagesController.findAll)
  .post(imagesController.create);

module.exports = router;
