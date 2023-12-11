import React from 'react'
import './../button.scss'

const ButtonDanger = ({title, ...rest}) => {
  return (
    
        <button className='button-danger' {...rest}>{title}</button>
    
  )
}

export default ButtonDanger