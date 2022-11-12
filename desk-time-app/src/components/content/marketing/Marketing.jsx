import React from 'react'
import MarketingCard from './MarketingCard'
const Marketing = ({marketing_data}) => {
  return (
    <div className='marketing'>
       {
        marketing_data?.map((item)=>{
            return <MarketingCard key={Math.random()+Date.now()+item.heading} heading={item.heading} titles={item.titles} img_url={item.img_url} icons={item.icons} sub_title={item.sub_title}/>
        })
       }
    </div>
  )
}

export default Marketing