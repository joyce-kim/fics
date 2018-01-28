const axios = require("axios");
const keys = require("./config.js");

module.exports = {
  findFoods: function (req, res) {
    var food = req.query.f;
    res.send(food);
    // var query = "query=" + city.trim() + "&type=" + type + "&maxprice=" + price + '&rankby=prominence&key=' + keys.PLACES_KEY;
    // axios
    //   .get("https://maps.googleapis.com/maps/api/place/textsearch/json?" + query)
    //   .then(response => {
    //     console.log(response);
    //   });
  }
}