import React from 'react'
import { ButtonBack, ButtonPrimary, Input, TextArea } from '../../components'
import { loginbg } from '../../assets'
import './create-post.scss'

const CreatePost = () => {
  return (
    <div> 
      <ButtonBack />
      <h1 className='title'>Create New Blog Post</h1>
      <Input label={"Post Title"} placeholder="Input Post Title" type="text"/>
      <img src={loginbg} alt="login" />
      <Input label={"Upload Image"} type="file"/>
      <TextArea label={"Description"} />
      <ButtonPrimary title={"Add Post"} />
    </div>
  )
}

export default CreatePost