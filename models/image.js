const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  public_id: {type: String, required: true},
  secure_url: { type: String, required: true },
  timestamp: { type: String, required: true },
  restaurantname: { type: String, trim: true, required: true },
  dishname: { type: String, trim: true, required: true },
  foodtype: { type: String, trim: true, required: true },
}, { _id: false });

const Image = mongoose.model("Image", imageSchema);

module.exports = Image;