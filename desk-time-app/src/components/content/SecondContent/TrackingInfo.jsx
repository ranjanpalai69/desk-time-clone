import React from 'react'
import { boosts, productivity } from '../../../Scripts/info'
import Benefits from './Benefits'
import ImageComp from './ImageComp'
import ProdComp from './ProdComp'
const TrackingInfo = () => {
  return (
    <div className='tracking-info'>
      <div className='benefits-info'>
      <ProdComp heading={productivity.h1} p={productivity.p}/>
      <Benefits boosts={boosts}/>
      </div>
      <div className='image'><ImageComp src="https://desktime.com/static/web/new-homepage/boost-productivity/boost-productivity.webp"/></div>

    </div>
  )
}

export default TrackingInfo