import React, { useEffect, useState } from "react";
import "./detailpost.scss";
import { ButtonBack, ButtonDanger, ButtonSuccess } from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";


const DetailPost = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:4000/v1/api/post/${id}`)
      .then((res) => {
        const response = res.data;
        setPost(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const confirmDelete = () => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => 
          axios.delete(`http://localhost:4000/v1/api/post/${id}`)
          .then((res) => {
            alert('Post Success Delete',res.data)
            navigate('/')
          })
          .catch((err) => {
            console.log(err);
          }),
        },
        {
          label: 'No',
          onClick: () => alert('Post is Save')
        }
      ],
      
    });
  }

  if (post.author) {
    return (
      <div className="detail-post-wrapper">
        <ButtonBack />
        <img
          src={`http://localhost:4000/${post.image}`}
          alt=""
          className="img-cover"
        />
        <h1 className="blog-title">{post.title}</h1>
        <div className="wrap-left-right">
          <p className="left-blog-author">
            {post.author.name} - {moment(post.createdAt).format("DD MMMM YYYY")}
          </p>
          <p className="right-button">
            <ButtonDanger  title={"Delete"} children={<FaTrashAlt />}  onClick={() => confirmDelete()}/>
            <ButtonSuccess title={"Edit"} children={<FaPencilAlt />} onClick={() => navigate(`/create-post/${post._id}`)} />
          </p>
        </div>
        <hr />
        <p className="blog-body">{post.description}</p>
      </div>
    );
  }
  return <p>Loading...</p>;
};

export default DetailPost;
