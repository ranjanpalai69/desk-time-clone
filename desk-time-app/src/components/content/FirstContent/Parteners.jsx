import React from 'react';
import Image from "../FirstContent/Image"
const parteners=["https://desktime.com/static/web/clients/customer-sixt-logo-white.svg","https://desktime.com/static/web/clients/customer-mapon-logo-white.svg","https://desktime.com/static/web/clients/customer-montway-logo-white.svg","https://desktime.com/static/web/clients/customer-onthemap-logo-white.svg","https://desktime.com/static/web/clients/customer-printful-logo-white.svg"];


export const Parteners = () => {
  return (
    <div className='parteners'>
        {
            parteners?.map((item)=>{
                return <Image key={Math.random()+Date.now()} item={item}/>
            })
        }
    </div>
  )
}
