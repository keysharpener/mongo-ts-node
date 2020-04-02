import express = require("express");
import PostService = require("./PostService");

const postService = new PostService();
const postsRouter = express.Router();

postsRouter.get("/", (req, res) => {
  postService.getAllPosts().then((p: any) => res.json(p));
});

postsRouter.get("/:id", (req, res) => {
  let id = req.params["id"];
  postService.getPostById(id).then((p: any) => res.json(p));
});

postsRouter.post("/", (req, res) => {
  let newPost = req.body;
  postService
    .insert(newPost)
    .then((p: String) => res.json(`Post updated successfully. Id:${p}`))
    .catch((err: any) => res.json(err));
});

postsRouter.put("/:id", (req, res) => {
  let id = req.params["id"];
  let newPost = req.body;
  postService
    .insertOrUpdate(id, newPost)
    .then((p: String) => res.json(`Post inserted successfully. Id:${p}`))
    .catch((err: any) => res.json(err));
});
postsRouter.delete("/:id", (req, res) => {
  let id = req.params["id"];
  postService
    .delete(id)
    .then(() => res.json(`Post inserted successfully. Id:${id}`))
    .catch((err: any) => res.json(err));
});

module.exports = postsRouter;
