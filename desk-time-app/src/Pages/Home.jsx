import React from 'react'
import CarouselComp from '../components/content/Carousel/CarouselComp'
import FifthContent from '../components/content/FifthContent/FifthContent'
import FreeTrial from '../components/content/FirstContent/FreeTrial'
import { Parteners } from '../components/content/FirstContent/Parteners'
import WorkFlow from '../components/content/fourthContent/WorkFlow'
import MarketingComp from '../components/content/marketing/MarketingComp'
import TrackingInfo from '../components/content/SecondContent/TrackingInfo'
import FeaturesContainer from '../components/content/ThirdContent/FeaturesContainer'
import Navbar from '../components/Navbar'
import "../styles/home.css";
import "../styles/secondContent.css";
const Home = () => {
  return (
    <div className='home'>
       
       <Navbar/>
       <FreeTrial/>
       <Parteners/>
       <TrackingInfo/>
       <FeaturesContainer/>
       <CarouselComp/>
       <WorkFlow/>
       <FifthContent/>
       <MarketingComp/>
    </div>
  )
}

export default Home