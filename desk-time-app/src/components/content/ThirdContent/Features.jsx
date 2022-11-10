import React from 'react'
import { coolFeatures } from '../../../Scripts/coolFeatures'
import Feature from './Feature'
const Features = () => {
  return (
    <div className='features'>
    {
    coolFeatures?.map((item)=>{
            return <Feature key={Math.random()+Date.now()+item.text} icon={item.icon} text={item.text}/>
        })
    }
    </div>
  )
}

export default Features