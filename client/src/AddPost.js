import React, { useState } from "react";
import uniqid from "uniqid";
import axios from "axios";
import { Link } from "react-router-dom";

function AddPost() {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");

  function savePostNow() {
    var post = {
      title: title,
      imageUrl: imageUrl,
      description: description,
      postId: uniqid(),
    };
    console.log(post);

    axios
      .post("/api/post/addNewPost", post)
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="row  justify-content-center">
      <div className="col-md-6">
        <input
          type="text"
          placeholder="Title"
          className="form-control"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="ImageUrl"
          className="form-control"
          value={imageUrl}
          onChange={(e) => {
            setImageUrl(e.target.value);
          }}
        />
        <textarea
          placeholder="Description"
          rows="5"
          className="form-control"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />

        <button onClick={savePostNow} className="btn btn-primary">
          Save Post
        </button>
      </div>
      <Link to="/" class="btn btn-primary">
        {" "}
        Back
      </Link>
    </div>
  );
}

export default AddPost;
