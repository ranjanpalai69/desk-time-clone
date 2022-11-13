import React from 'react'

const IndividualLinkCont = ({links}) => {
  return (
    <div className='ind-link-cont'>
        {
            links?.map((link)=>{
                return <p key={Math.random()+Date.now()}>{link}</p>
            })
        }
    </div>
  )
}

export default IndividualLinkCont