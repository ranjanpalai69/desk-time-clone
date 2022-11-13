import React from 'react'
import { social_icons } from '../../../Scripts/coolFeatures'
import Icon from '../marketing/Icon'

const IconsAndInp = () => {
  return (
    <div className='icons-and-inp'>
        <div className="social-icons">
        {
            social_icons?.map((icon)=>{
                return <Icon key={Math.random()+Date.now()} icon={icon}/>
            })
        }
        </div>
        <div className='btn-inp'>
        <input type="text" placeholder='Email to subscribe'/>
        <button>SUBSCRIBE</button>
        </div>
    </div>
  )
}

export default IconsAndInp