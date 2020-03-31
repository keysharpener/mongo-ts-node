import express = require("express");
import mongoose from "mongoose";
import { getAllPosts, getPostById } from "./PostService";

const server: express.Application = express();

mongoose
  .connect("mongodb://localhost:27017/node", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("connection successful"))
  .catch(err => console.error(err));

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
