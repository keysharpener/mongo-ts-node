import BlogPost = require("./Posts");
import mongoose from "mongoose";
class PostService {
  constructor() {
    mongoose
      .connect("mongodb://localhost:27017/node", {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      .then(() => console.log("connection successful"))
      .catch(err => console.error(err));
  }
  getAllPosts() {
    return BlogPost.find(function(err, products) {
      return products;
    });
  }
  getPostById(id: number) {
    return BlogPost.find({ postNumber: id }, function(err, products) {
      return products;
    });
  }
}

export = new PostService();
