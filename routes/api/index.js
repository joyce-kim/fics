const router = require("express").Router();
const foodRoutes = require("./food");
const commentcontroller = require("../../controllers/commentController");
router.use("/f", foodRoutes);


router.post('/images/:pictureid/comment', commentcontroller.create );
module.exports = router;
