import React from 'react'
import Benefit from './Benefit'

const Benefits = ({boosts}) => {
  return (
    <div className='benefits'>
      {
        boosts?.map((item)=>{
            return <Benefit key={Math.random()+Date.now()} icon={item.icon} h3={item.h3} p={item.p}/>
        })
      }
    </div>
  )
}

export default Benefits