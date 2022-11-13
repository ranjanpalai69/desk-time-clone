import Logo from "./Logo";

import React, { useEffect } from 'react'
import Navlinks from "./Navlinks";
import Buttons from "./Buttons";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";

 
const Navbar = () => {
  const [windowWidth,setWindowWidth]=useState(window.innerWidth);
  const detectWidth=()=>{
    setWindowWidth(window.innerWidth);
  }
useEffect(()=>{
   window.addEventListener('resize',detectWidth)

   return()=>{
    window.removeEventListener('resize',detectWidth)
   }
},[windowWidth])
  

console.log(windowWidth);
  return (
    <div className="nav-bar">
      {
         windowWidth<=1150? <button className="menu-btn">
         <HiMenu/>
       </button>:null
        }

        <Logo/>
        
       {
        windowWidth<=1150?null: <Navlinks/>
       }
        <Buttons/>
       
        
      
    </div>
  )
}

export default Navbar