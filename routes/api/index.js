const router = require("express").Router();
const bookRoutes = require("./images");

// Book routes
router.use("/images", bookRoutes);

module.exports = router;
