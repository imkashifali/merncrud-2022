const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");

const schema = mongoose.Schema;

const postSchema = new schema({
  title: String,
  imageUrl: String,
  description: String,
  postId: String,
});
const PostModel = mongoose.model("posts", postSchema);
//add post
router.post("/addNewPost", (req, res) => {
  const newPost = new PostModel({
    title: req.body.title,
    imageUrl: req.body.imageUrl,
    description: req.body.description,
    postId: req.body.postId,
  });

  newPost.save(function (err) {
    if (!err) {
      res.send("new post add successfully");
    } else {
      res.send(err);
    }
  });
});
//get all Post
router.get("/getPostList", (req, res) => {
  PostModel.find({}, function (docs, err) {
    if (!err) {
      res.send(docs);
    } else {
      res.send(err);
    }
  });
});

//edit record
router.post("/editPostData", (req, res) => {
  PostModel.find({ postId: req.body.postId }, (docs, err) => {
    if (!err) {
      res.send(docs);
    } else {
      res.send(err);
    }
  });
});

//update logic

router.post("/updateNow", (req, res) => {
  PostModel.findOneAndUpdate(
    { postId: req.body.postId },
    {
      title: req.body.title,
      imageUrl: req.body.imageUrl,
      description: req.body.description,
    },
    (err) => {
      if (!err) {
        res.send("Post Updated Successfully ");
      } else {
        res.send(err);
      }
    }
  );
});

//Remove logic
router.post("/deleteRecord", (req, res) => {
  PostModel.findOneAndDelete({ postId: req.body.postId }, (err) => {
    if (!err) {
      res.send("Post Delete Successfully");
    } else {
      res.send(err);
    }
  });
});
module.exports = router;
