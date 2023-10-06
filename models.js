const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    Name: "String",
    Nickname: "String"
  }
);

const Post = mongoose.model("Post", schema);
module.exports = Post;