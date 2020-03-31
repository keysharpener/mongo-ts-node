import BlogPost = require("./Posts");
import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/node", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("connection successful"))
  .catch(err => console.error(err));

export function getAllPosts() {
  return BlogPost.find(function(err, products) {
    return products;
  });
}

export function getPostById(id: number) {
  return BlogPost.find({ postNumber: id }, function(err, products) {
    return products;
  });
}
