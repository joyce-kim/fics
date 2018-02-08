const router = require("express").Router();

const imageRoutes = require("./images");

router.use("/images", imageRoutes);

const commentcontroller = require("../../controllers/commentController");


router.post('/images/:pictureid/comment', commentcontroller.create );
module.exports = router;
