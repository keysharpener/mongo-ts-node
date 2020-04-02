import BlogPost = require("./Posts");
import mongoose from "mongoose";
import { IBlogPost } from "./IBlogPost";
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
  delete(id: string) {
    let technicalId = mongoose.Types.ObjectId(id);
    return BlogPost.deleteOne({ _id: technicalId }).then(() =>
      console.log(`Post ${id} deleted successfully`)
    );
  }
  getAllPosts() {
    return BlogPost.find(function(err, products) {
      return products;
    });
  }
  getPostById(id: string) {
    let technicalId = mongoose.Types.ObjectId(id);
    return BlogPost.find({ _id: technicalId }, function(err, products) {
      return products;
    });
  }
  insert(newRecord: IBlogPost) {
    let post = new BlogPost({
      name: newRecord.name,
      description: newRecord.description,
      publishDate: newRecord.publishDate,
      author: newRecord.author,
      postNumber: newRecord.postNumber
    });
    return post.save().then(p => {
      console.log("saved successfully");
      return p.id;
    });
  }
  insertOrUpdate(id: string, newRecord: IBlogPost) {
    let post = new BlogPost({
      name: newRecord.name,
      description: newRecord.description,
      publishDate: newRecord.publishDate,
      author: newRecord.author,
      postNumber: newRecord.postNumber
    });
    let technicalId = mongoose.Types.ObjectId(id);
    return post.updateOne({ _id: technicalId }).then(p => {
      console.log("saved successfully");
      return p;
    });
  }
}

export = PostService;
