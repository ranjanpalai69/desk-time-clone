import React from 'react'

const SliderCard = ({name,avatar,position,message,company}) => {
  return (
    <div className='slider-card'>
   <div className='details'>
      <div>
        <img src={avatar} alt="avatar" />
      </div>
      <div>
        <h3>{name}</h3>
        <p>{position}</p>
        <h4>{company}</h4>
      </div>
   </div>
   <div className='msg'>
        <p>{message}</p>
   </div>

    </div>
  )
}

export default SliderCard;