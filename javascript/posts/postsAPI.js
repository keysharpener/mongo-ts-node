"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var postService = require("./PostService");
var postsRouter = express.Router();
postsRouter.get("/", function (req, res) {
    postService.getAllPosts().then(function (p) { return res.json(p); });
});
postsRouter.get("/:id", function (req, res) {
    var id = +req.params["id"];
    postService.getPostById(id).then(function (p) { return res.json(p); });
});
postsRouter.post("/", function (req, res) {
    var newPost = req.body;
    postService
        .insert(newPost)
        .then(function (p) { return res.json("Post updated successfully. Id:" + p); })
        .catch(function (err) { return res.json(err); });
});
postsRouter.put("/:id", function (req, res) {
    var id = req.params["id"];
    var newPost = req.body;
    postService
        .insertOrUpdate(id, newPost)
        .then(function (p) { return res.json("Post inserted successfully. Id:" + p); })
        .catch(function (err) { return res.json(err); });
});
module.exports = postsRouter;
