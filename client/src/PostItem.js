import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function PostItem({ post }) {
  let navigate = useNavigate();

  function deletePost(postId) {
    axios
      .post("/api/post/deleteRecord", { postId: postId })
      .then((res) => {
        alert(res.data);
        navigate(0);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="shadow p-3 mb-5 bg-white rounded">
      <h2>{post.title}</h2>
      <img src={post.imageUrl} alt="" className="image-fluid" />
      <p>{post.description}</p>
      <Link to={`/editPost/${post.postId}`} class="btn btn-primary">
        Edit
      </Link>
      <button
        class="btn btn-danger"
        onClick={() => {
          deletePost(post.postId);
        }}
      >
        Danger
      </button>
    </div>
  );
}

export default PostItem;
