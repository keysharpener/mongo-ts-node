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

server.get("/", (req, res) => {
  getAllPosts().then(p => res.json(p));
});

server.get("/:id", (req, res) => {
  let id = +req.params["id"];
  getPostById(id).then(p => res.json(p));
});

server.listen(3000, function() {
  console.log("Listening on port 3000");
});
