import React from 'react'
import './textarea.scss'

const TextArea = ({label}) => {
  return (
    <div className='textarea-wrapper'>
        <label className='label' htmlFor={label}>{label}</label>
        <textarea className='textarea' name="" id="" cols="30" rows="5"></textarea>
    </div>
  )
}

export default TextArea