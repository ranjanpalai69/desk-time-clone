import Logo from "./Logo";

import React from 'react'
import Navlinks from "./Navlinks";
import Buttons from "./Buttons";

const Navbar = () => {
  return (
    <div className="nav-bar">
        <Logo/>
        
        <Navlinks/>
        <Buttons/>
      
    </div>
  )
}

export default Navbar