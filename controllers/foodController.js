const axios = require("axios");
const keys = require("./config.js");

module.exports = {
  findFoods: function (req, res) {
    let food = req.query.food;
    const baseUrl = 'https://pixabay.com/api/';
    const key = keys.PIXABAY;
    let query = `${baseUrl}?key=${key}&q=${food}`
    axios
      .get(query)
      .then(response => console.log(response))
      .catch(err => res.status(422).json(err))
  }
}