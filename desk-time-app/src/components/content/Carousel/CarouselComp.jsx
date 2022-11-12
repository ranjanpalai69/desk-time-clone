import React from 'react';
import Heading from './Heading';
import { headings } from '../../../Scripts/info'
import Slider from './Slider';
import "../../../../src/styles/carousel.css"
const CarouselComp = () => {
  return (
    <div className='carousel-comp'>
        <Heading heading={headings.carousel_heading}/>
        <Slider/>
    </div>
  )
}

export default CarouselComp