import React from 'react'
import { loginbg } from '../../assets'
import './detailpost.scss'
import { ButtonBack } from '../../components'

const DetailPost = () => {
  return (
    <div className='detail-post-wrapper'>
      <ButtonBack />
      <img src={loginbg} alt="" className="img-cover" />
      <h1 className='blog-title'>Title Blog</h1>
      <p className='blog-author'>Author - Date Post</p>
      <hr/>
      <p className='blog-body'>Description</p>
    </div>
  )
}

export default DetailPost