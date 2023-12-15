import React, { useEffect, useState } from 'react'
import './detailpost.scss'
import { ButtonBack } from '../../components'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'

const DetailPost = () => {
 const {id} = useParams()
 const [post,setPost] =useState({})


 useEffect(()=>{
  axios.get(`http://localhost:4000/v1/api/post/${id}`)
  .then((res)=>{
    const response = res.data
    setPost(response.data)
  })
  .catch((err)=>{
    console.log(err)
  })
 },[id])

 if (post.author) {
 
 return (
    <div className='detail-post-wrapper'>
      <ButtonBack />
      <img src={`http://localhost:4000/${post.image}`} alt="" className="img-cover" />
      <h1 className='blog-title'>{post.title}</h1>
      <p className='blog-author'>{post.author.name} - {moment(post.createdAt).format('DD MMMM YYYY')}</p>
      <hr/>
      <p className='blog-body'>{post.description}</p>
    </div>
 )
}
return <p>Loading...</p>;
}

export default DetailPost