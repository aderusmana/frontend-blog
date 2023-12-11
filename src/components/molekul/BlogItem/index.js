import React from 'react'
import { registerbg } from '../../../assets'
import './blogitem.scss'
import { ButtonSuccess } from '../../atoms'
import { useNavigate } from 'react-router-dom'

const BlogItem = () => {
  const navigate = useNavigate();
  return (
    <div className='blog-item'>
        <img className='image-thumb' src={registerbg} alt="register" />
        <div className='content-detail'>
            <h3 className='title'>Title</h3>
            <p className='author'>Author</p>
            <p className='body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, repellat.</p>
            <ButtonSuccess title={"View Detail"} onClick={() => navigate("/detail-post")} />
        </div>
    </div>
  )
}

export default BlogItem