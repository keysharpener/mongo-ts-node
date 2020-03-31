import express = require("express");
import { loggerMiddleware } from "./logger/loggerMiddleware";
let router = require("./posts/postsAPI");

const server: express.Application = express();

server.use(loggerMiddleware);
server.use("/api/posts", router);

server.listen(3000, function() {
  console.log("Listening on port 3000");
});
