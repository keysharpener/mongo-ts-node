"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var loggerMiddleware_1 = require("./logger/loggerMiddleware");
var router = require("./posts/postsAPI");
var bodyParser = require("body-parser");
var server = express();
server.use(bodyParser.json());
server.use(loggerMiddleware_1.loggerMiddleware);
server.use("/api/posts", router);
server.listen(3000, function () {
    console.log("Listening on port 3000");
});
