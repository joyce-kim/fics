const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pictureSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  tags: { type: String, required: true },
  img: { data: Buffer, contentType: String },
}, { _id: false });

const Picture = mongoose.model("Picture", pictureSchema);

module.exports = Picture;