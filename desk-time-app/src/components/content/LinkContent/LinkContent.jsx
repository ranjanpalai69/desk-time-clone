import React from 'react'
import "../../../../src/styles/LinkContent.css";
import { links } from '../../../Scripts/linkComp';
import IndividualLinkCont from './IndividualLinkCont';
const LinkContent = () => {
  return (
    <div className='link-content'>
        {
          links?.map((item)=>{
            return <IndividualLinkCont key={Math.random()+Date.now() } links={item}/>
          })  
        }
    </div>
  )
}

export default LinkContent