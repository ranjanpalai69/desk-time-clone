import React from 'react'
import { FaCheck } from 'react-icons/fa'

const IndividualTitle = ({indTitle}) => {
  return (
    <div className='ind-title'>
        <div><FaCheck/></div>
        <p>{indTitle}</p>
    </div>
  )
}

export default IndividualTitle