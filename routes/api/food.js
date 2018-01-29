const router = require("express").Router();
const foods = require("../../controllers/foodController");

router.route("/find")
  .get(foods.findFoods)

module.exports = router;