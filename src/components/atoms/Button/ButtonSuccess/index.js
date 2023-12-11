import React from 'react'
import './../button.scss'

const ButtonSuccess = ({title, ...rest}) => {
  return (
    
        <button className='button-success' {...rest}>{title}</button>
    
  )
}

export default ButtonSuccess