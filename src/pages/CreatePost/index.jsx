import React, { useState } from "react";
import { ButtonBack, ButtonPrimary, Input, TextArea } from "../../components";
import "./create-post.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const navigate = useNavigate()

  const onSubmit = () => {
    const data = new FormData();
    data.append("title", title);
    data.append("description", description);
    data.append("image", image);

    axios.post('http://localhost:4000/v1/api/createpost',data,{
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then((res) => {
      alert("Create Post Success")
      navigate("/")
    })
    .catch((err) => {
      alert("Create Post Failed",err)
    })
  };
  const onImageUpload = (e) => {
      const file = e.target.files[0];
      setImage(file)
      setImagePreview(URL.createObjectURL(file))
  };
  return (
    <div>
      <ButtonBack />
      <h1 className="title">Create New Blog Post</h1>
      <Input
        label={"Post Title"}
        placeholder="Input Post Title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {image && <img src={imagePreview} alt="gambar" />}
      <Input
        label={"Upload Image"}
        type="file"
        onChange={(e) => onImageUpload(e)}
      />
      <TextArea
        label={"Description"}
        placeholder="Input Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <ButtonPrimary title={"Add Post"} onClick={onSubmit} />
    </div>
  );
};

export default CreatePost;
