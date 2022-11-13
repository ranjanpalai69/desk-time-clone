import React from 'react'
import AccordionComp from '../components/content/AccordionComp/AccordionComp'
import CarouselComp from '../components/content/Carousel/CarouselComp'
import FifthContent from '../components/content/FifthContent/FifthContent'
import FreeTrial from '../components/content/FirstContent/FreeTrial'
import { Parteners } from '../components/content/FirstContent/Parteners'
import CopyRight from '../components/content/Footer/CopyRight'
import Footer from '../components/content/Footer/Footer'
import WorkFlow from '../components/content/fourthContent/WorkFlow'
import GreenComp from '../components/content/GreenComp/GreenComp'
import LinkContent from '../components/content/LinkContent/LinkContent'
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
       <AccordionComp/>
       <GreenComp/>
       <LinkContent/>
       <Footer/>
       <CopyRight/>
    </div>
  )
}

export default Home