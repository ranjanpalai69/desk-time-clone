import React from 'react'


const ProdComp = ({heading,p}) => {
  return (
    <div className='prod-comp trial-info'>
        <h1>{heading}</h1>
        <p>{p}</p>
    </div>
  )
}

export default ProdComp