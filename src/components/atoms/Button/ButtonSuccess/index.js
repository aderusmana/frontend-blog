import React from 'react'
import './../button.scss'

const ButtonSuccess = ({title,children, ...rest}) => {
  return (
    
        <button className='button-success' {...rest}>{children} {title}</button>
    
  )
}

export default ButtonSuccess