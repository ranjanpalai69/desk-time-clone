import React from 'react'
import ImageComp from '../SecondContent/ImageComp';
import Icon from './Icon';
import IndividualTitle from './IndividualTitle';

const MarketingCard = ({heading,titles,img_url,icons,sub_title}) => {
  return (
    <div className='marketing-card'>
        <ImageComp src={img_url} alt="pics"/>
         <h2>{heading}</h2>
        <div className="icons">
            {
                icons?.map((item)=>{
                    return <Icon key={Math.random()+Date.now()} icon={item}/>
                })
            }
        </div>
        <p className='sub-title'>{sub_title}</p>
        <div className="titles-cont">
            {
                titles?.map((item)=>{
                    return <IndividualTitle key={Math.random()+Date.now()} icon={item} indTitle={item}/>
                })
            }
        </div>
        <button className='btn'>LEARN MORE</button>
    </div>
  )
}

export default MarketingCard;