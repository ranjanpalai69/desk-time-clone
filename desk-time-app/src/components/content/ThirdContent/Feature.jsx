import React from 'react'

const Feature = ({icon,text}) => {
  return (
    <div className='feature'>
      <span className='icon'>{icon}</span>
      <span className='text'>{text}</span>
    </div>
  )
}

export default Feature