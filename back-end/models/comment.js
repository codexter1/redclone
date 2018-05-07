// Add your comment model here
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  content: String,
  votes: Number
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
