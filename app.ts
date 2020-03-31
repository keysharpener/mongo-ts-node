import express = require("express");
import { getAllPosts, getPostById } from "./PostService";

const server: express.Application = express();

function loggerMiddleware(
  request: express.Request,
  response: express.Response,
  next: any
) {
  console.log(`${request.method} ${request.path}`);
  next();
}

server.use(loggerMiddleware);

server.get("/api/posts/", (req, res) => {
  getAllPosts().then(p => res.json(p));
});

server.get("/api/posts/:id", (req, res) => {
  let id = +req.params["id"];
  getPostById(id).then(p => res.json(p));
});

server.listen(3000, function() {
  console.log("Listening on port 3000");
});
