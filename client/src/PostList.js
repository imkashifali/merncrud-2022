import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";
import axios from "axios";
import { Link } from "react-router-dom";

function PostList() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/post/getPostList")
      .then((res) => {
        console.log(res.data);
        setPostData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const postListing = postData.map((post) => {
    return (
      <div className="row justify-content-lg-center">
        <PostItem post={post} />
      </div>
    );
  });
  return (
    <div>
      <Link to="/addPost" class="btn btn-primary">
        Add Post
      </Link>

      {postListing}
    </div>
  );
}

export default PostList;
