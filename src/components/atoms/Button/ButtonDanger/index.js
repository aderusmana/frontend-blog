import React from 'react'
import './../button.scss'

const ButtonDanger = ({title, children, ...rest}) => {
  return (
    
        <button className='button-danger' {...rest}>{children} {title}</button>
    
  )
}

export default ButtonDanger