import React from 'react';
import { boosts2, universal } from '../../../Scripts/info';
import Benefits from '../SecondContent/Benefits';
import ProdComp from '../SecondContent/ProdComp';
import "../../../styles/featurescontainer.css";
import ImageComp from '../SecondContent/ImageComp';
import Features from './Features';
const FeaturesContainer = () => {
  return (
    <div className='features-container' >
       <ProdComp heading={universal.h1} p={universal.p}/>
       <div className='inside-container'>
       <Benefits boosts={boosts2}/>
       <ImageComp src="https://desktime.com/static/web/new-homepage/universal-platform/universal-platform.webp"/>
       </div>
       <Features/>
       <div className='see-all-feature'>
          <button>SEE ALL FEATURES</button>
          <p>All the features can be turned on and off to suit eveyone's needs</p>
       </div>
    </div>
  )
}

export default FeaturesContainer