import mongoose from "mongoose";

interface IBlogPost {
  name: string;
  description: string;
  publishDate: Date;
  author: string;
}

interface IBlogPostModel extends IBlogPost, mongoose.Document {}

var postSchema = new mongoose.Schema({
  name: String,
  description: String,
  publishDate: Date,
  author: String
});

let BlogPost = mongoose.model<IBlogPostModel>("Post", postSchema);

export = BlogPost;
