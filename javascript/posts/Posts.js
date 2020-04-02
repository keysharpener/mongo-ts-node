"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var mongoose_1 = __importDefault(require("mongoose"));
var postSchema = new mongoose_1.default.Schema({
    name: String,
    description: String,
    publishDate: Date,
    author: String
});
var BlogPost = mongoose_1.default.model("Post", postSchema);
module.exports = BlogPost;
