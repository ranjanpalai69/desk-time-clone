import React from 'react'
import { marketing } from '../../../Scripts/info';
import "../../../styles/marketingComp.css" ;
import ProdComp from '../SecondContent/ProdComp';
import Marketing from './Marketing';
import { marketing_data } from '../../../Scripts/coolFeatures';
const MarketingComp = () => {
  return (
    <div className='marketing-comp'>
        <ProdComp heading={marketing.h1} p={marketing.p}/>
        <Marketing marketing_data={marketing_data}/>
    </div>
  )
}

export default MarketingComp