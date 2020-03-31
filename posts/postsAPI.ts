import express = require("express");
let postService = require("./PostService");

const postsRouter = express.Router();

postsRouter.get("/", (req, res) => {
  postService.getAllPosts().then((p: any) => res.json(p));
});

postsRouter.get("/:id", (req, res) => {
  let id = +req.params["id"];
  postService.getPostById(id).then((p: any) => res.json(p));
});

module.exports = postsRouter;
