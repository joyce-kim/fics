const router = require("express").Router();
const foods = require("../../controllers/googleFoodController");

router
  .route("/")
  .get(foods.findFoods)

module.exports = router;