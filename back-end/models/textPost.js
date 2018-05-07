// Add your textPost model here
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TextPostSchema = new Schema({
  title: String,
  content: String,
  thumbnail: String,
  votes: Number,
  comments: [CommentSchema]
});

const TextPost = mongoose.model('TextPost', TextPostSchema);

module.exports = TextPost
