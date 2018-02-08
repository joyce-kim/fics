const router = require("express").Router();
const imagesController = require("../../controllers/imagesController.js");

// Require all models
var db = require("../../models");

router.route("/")
  .get(imagesController.findAll)
  .post(imagesController.create);



// express.get('/api/images', function(req, res){
// 	res.json(imagesData);
// });

// express.post('/api/images', function(req, res){
// 	imagesData.push(req.body);
// })

module.exports = router;