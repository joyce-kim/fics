const router = require("express").Router();
const foodRoutes = require("./food");

router.use("/f", foodRoutes);

module.exports = router;
