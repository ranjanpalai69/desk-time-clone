import React from 'react'
import ImageComp from '../SecondContent/ImageComp';
import ProdComp from '../SecondContent/ProdComp';
import "../../../../src/styles/fifthContent.css"
import { integration } from '../../../Scripts/info';

const FifthContent = () => {
  return (
    <div className='fifth-content'>
         <ImageComp src="https://desktime.com/static/web/new-homepage/integrations/integrations.webp"/>
         <div className='inner-fifth'>
            <ProdComp heading={integration.h1} p={integration.p}/>
            <button className='btn'>READ MORE</button>
         </div>
    </div>
  )
}

export default FifthContent