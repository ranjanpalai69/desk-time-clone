import React from 'react'
import FreeTrial from '../components/content/FirstContent/FreeTrial'
import { Parteners } from '../components/content/FirstContent/Parteners'
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
    </div>
  )
}

export default Home