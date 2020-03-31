import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/node", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

interface IBlogPost {
  name: String;
  description: String;
  publishDate: Date;
  author: String;
  postNumber: String;
}

interface IBlogPostModel extends IBlogPost, mongoose.Document {}

var postSchema = new mongoose.Schema({
  name: String,
  description: String,
  publishDate: Date,
  author: String,
  postNumber: Number
});

let BlogPost = mongoose.model<IBlogPostModel>("Post", postSchema);

for (let index = 0; index < 100; index++) {
  const post = new BlogPost({
    author: "Robin Francillon",
    description: `My ${index}th blog post`,
    name: "Welcome here",
    publishDate: new Date(),
    postNumber: index
  });
  post.save();
}

let latest = BlogPost.find({ postNumber: { $gte: "70" } })
  // .where("postNumber")
  // .gte(70)
  .exec(callback);

function callback(err: any, posts: any) {
  console.log(posts);
}

console.log(latest);
