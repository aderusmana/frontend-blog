import React from 'react'
import './../button.scss'

const ButtonPrimary = ({title, ...rest}) => {
  return (
    
        <button className='button-primary' {...rest}>{title}</button>
    
  )
}

export default ButtonPrimary