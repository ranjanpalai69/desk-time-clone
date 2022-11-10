import React from 'react'

const Image = ({item}) => {
  return (
    <div className='img'>
        
       <img src={item} alt="pics" />

    </div>
  )
}

export default Image;