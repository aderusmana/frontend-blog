import React, { useEffect, useState } from "react";
import { ButtonBack, ButtonPrimary, Input, TextArea } from "../../components";
import "./create-post.scss";
import {  useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postToAPI, setForm, setImgPreview, updateToAPI } from "../../config/redux/action";
import axios from "axios";

const CreatePost = () => {
  const {form, imgPreview } = useSelector(state => state.createPostReducer)
  const {title, description, image} = form
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [isUpdate,setIsUpdate] = useState(false)
  const {id} = useParams() 

  useEffect(()=>{
    if(id){
      setIsUpdate(true)
      axios.get(`http://localhost:4000/v1/api/post/${id}`)
      .then(res => {
        const response = res.data.data
        dispatch(setForm('title',response.title))
        dispatch(setForm('description',response.description))
        dispatch(setForm('image',response.image))
        dispatch(setImgPreview(`http://localhost:4000/${response.image}`))
      })
      .catch(err => console.log(err))
    }else{
      setIsUpdate(false)
    }
  },[id,dispatch])

  const onSubmit = () => {
    if (isUpdate) {
      console.log('update');
      dispatch(updateToAPI(form, id))
        .then(() => {
          navigate("/");
        })
        .catch((err) => {
          console.error("Update failed:", err);
        });
    } else {
      console.log('create');
      dispatch(postToAPI(form))
        .then(() => {
          navigate("/");
        })
        .catch((err) => {
          console.error("Creation failed:", err);
        });
    }
  };
  const onImageUpload = (e) => {
      const file = e.target.files[0];
      dispatch(setForm('image',file))
      dispatch(setImgPreview(URL.createObjectURL(file)))
  };

  
  return (
    <div>
      <ButtonBack />
      <h1 className="title">{isUpdate ? "Update" : "Create New"} Blog Post</h1>
      <Input
        label={"Post Title"}
        placeholder="Input Post Title"
        type="text"
        value={title}
        onChange={(e) => dispatch(setForm('title',e.target.value))}
      />
      {image && <img src={imgPreview} alt="gambar" />}
      <Input
        label={"Upload Image"}
        type="file"
        onChange={(e) => onImageUpload(e)}
      />
      <TextArea
        label={"Description"}
        placeholder="Input Description"
        value={description}
        onChange={(e) => dispatch(setForm('description',e.target.value))}
      />
      <ButtonPrimary title={isUpdate ? "Update" : "Create"} onClick={onSubmit} />
    </div>
  );
};

export default CreatePost;
