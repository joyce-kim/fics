const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: false },
  commentBody: { type: String, required: true },
  pictureId: { type: String, required: true },
}, { _id: false });

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;