import React from 'react'
import './blogitem.scss'
import { ButtonSuccess } from '../../atoms'
import { useNavigate } from 'react-router-dom'
import moment from 'moment';

const BlogItem = ({post}) => {
  const navigate = useNavigate();
  return (
    <div className='blog-item'>
        <img className='image-thumb' src={`http://localhost:4000/${post.image}`} alt="register" />
        <div className='content-detail'>
            <h3 className='title'>{post.title}</h3>
            <p className='author'>{post.author.name} - {moment(post.createdAt).format('DD MMMM YYYY')}</p>
            <p className='body'>{post.description}</p>
            <ButtonSuccess title={"View Detail"} onClick={() => navigate(`/detail-post/${post._id}`)} />
        </div>
    </div>
  )
}

export default BlogItem