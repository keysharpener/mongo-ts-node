import BlogPost = require("./posts");

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
