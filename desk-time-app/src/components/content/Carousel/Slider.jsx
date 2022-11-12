import React from 'react';
// import {Carousel} from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import { slider_data } from '../../../Scripts/info';
import SliderCard from './SliderCard';

const Slider = () => {
    const responsive = {
        
        desktop: {
            breakpoint: { max:2800, min: 1024 },
            items: 3,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 500 },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 500, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };
    
    return (
       
            <Carousel responsive={responsive}   renderButtonGroupOutside={true} showDots={true}>
               {
                slider_data.map((item)=>{
                    return <SliderCard key={Math.random()+Date.now()+item.name} name={item.name} avatar={item.avatar} position={item.position} message={item.message} company={item.company}/>
                })
               }
            </Carousel>
       
    )
}

export default Slider