import React from 'react'
import "../../../../src/styles/Footer.css";
import Logo from '../../Logo';
import IconsAndInp from './IconsAndInp';
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
           <Logo/>
           <div className='get-app'>
            <img src="https://lh3.googleusercontent.com/q1k2l5CwMV31JdDXcpN4Ey7O43PxnjAuZBTmcHEwQxVuv_2wCE2gAAQMWxwNUC2FYEOnYgFPOpw6kmHJWuEGeIBLTj9CuxcOEeU8UXyzWJq4NJM3lg=s0" alt="google-get-app" />
            <img src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-mac-app-store.svg" alt="appstore-get-app" />
           </div>
        </div>
        <IconsAndInp/>
    </div>
  )
}

export default Footer