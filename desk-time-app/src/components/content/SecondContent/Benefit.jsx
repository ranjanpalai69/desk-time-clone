import React from 'react'

const Benefit = ({ icon, h3, p }) => {
    return (
        <div className='benefit'>
            <div className='line'>
                <span className='icon'>{icon}</span>
                <span className='h3'>{h3}</span>
            </div>
            <p>{p}</p>
        </div>
    )
}

export default Benefit