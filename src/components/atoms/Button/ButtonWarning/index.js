import React from 'react'
import './../button.scss'

const BUttonWarning = ({title, ...rest}) => {
  return (
    
        <button className='button-warning' {...rest}>{title}</button>
    
  )
}

export default BUttonWarning