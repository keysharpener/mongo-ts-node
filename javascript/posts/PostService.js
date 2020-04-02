"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var BlogPost = require("./Posts");
var mongoose_1 = __importDefault(require("mongoose"));
var PostService = /** @class */ (function () {
    function PostService() {
        mongoose_1.default
            .connect("mongodb://localhost:27017/node", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
            .then(function () { return console.log("connection successful"); })
            .catch(function (err) { return console.error(err); });
    }
    PostService.prototype.getAllPosts = function () {
        return BlogPost.find(function (err, products) {
            return products;
        });
    };
    PostService.prototype.getPostById = function (id) {
        var technicalId = mongoose_1.default.Types.ObjectId(id);
        return BlogPost.find({ _id: technicalId }, function (err, products) {
            return products;
        });
    };
    PostService.prototype.insert = function (newRecord) {
        var post = new BlogPost({
            name: newRecord.name,
            description: newRecord.description,
            publishDate: newRecord.publishDate,
            author: newRecord.author,
            postNumber: newRecord.postNumber
        });
        return post.save().then(function (p) {
            console.log("saved successfully");
            return p.id;
        });
    };
    PostService.prototype.insertOrUpdate = function (id, newRecord) {
        var post = new BlogPost({
            name: newRecord.name,
            description: newRecord.description,
            publishDate: newRecord.publishDate,
            author: newRecord.author,
            postNumber: newRecord.postNumber
        });
        return post.updateOne({ _id: "" + id }).then(function (p) {
            console.log("saved successfully");
            return p.id;
        });
    };
    return PostService;
}());
module.exports = new PostService();
