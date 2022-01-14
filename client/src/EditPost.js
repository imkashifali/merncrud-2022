import React, { useEffect, useState } from "react";
import { useParams,useNavigate  } from "react-router-dom";
import axios from "axios";

function EditPost() {
  let navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");

  let params = useParams();
  useEffect(() => {
    axios
      .post("/api/post/editPostData", { postId: params.postId })
      .then((res) => {
        console.log(res);
        const PostDataList = res.data[0];
        setTitle(PostDataList.title);
        setImageUrl(PostDataList.imageUrl);
        setDescription(PostDataList.description);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function updatePostNow() {
    const updateDataNow = {
      title: title,
      imageUrl: imageUrl,
      description: description,
      postId: params.postId,
    };
    axios
      .post("/api/post/updateNow", updateDataNow)
      .then((res) => {
        console.log(res);
        alert(res.data)
        navigate("/")
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
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

        <button onClick={updatePostNow} className="btn btn-primary">
          Update Post
        </button>
      </div>
    </div>
  );
}

export default EditPost;
