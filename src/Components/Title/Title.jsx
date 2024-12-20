import React from 'react'
import './Title.css'


const Title = ({heading, content}) => {
  return (
    <div className='title'>
      <h1>{heading}</h1>
      <p>{content}</p>
    </div>
  )
}

export default Title
