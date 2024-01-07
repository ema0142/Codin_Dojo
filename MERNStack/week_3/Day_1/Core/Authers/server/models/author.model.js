// import the mongoose lib
const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "{PATH} is required."],
    minlength: [3, "{PATH} should be at least 3 characters."],
  },
}, { timestamps: true });

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;
