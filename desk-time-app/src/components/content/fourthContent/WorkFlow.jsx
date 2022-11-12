import React from 'react'
import "../../../../src/styles/workflow.css";
import { boosts3, headings } from '../../../Scripts/info';
import Heading from '../Carousel/Heading';
import Benefits from '../SecondContent/Benefits';
import ImageComp from '../SecondContent/ImageComp';
const WorkFlow = () => {
  return (
    <div className='work-flow'>
        <Heading heading={headings.work_flow_heading}/>
        <div className='inside-container'>
        <ImageComp src="https://desktime.com/static/web/new-homepage/seamless-workflow/seamless-workflow.webp"/>
       <Benefits boosts={boosts3}/>
        <p className='bnth'>All the features can be turned on and off to suit eveyone's needs</p>
       </div>
    </div>
  )
}

export default WorkFlow;