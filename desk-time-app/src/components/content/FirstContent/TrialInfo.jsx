import React from 'react'
import InputTrial from './InputTrial'

const TrialInfo = () => {
  return (
    <div className='trial-info'>
    <h1>The ultimate all-in-one time tracker for your business</h1>
    <p>A time tracker with additional workforce management features that will help you develop a high-performing team that smashes goals every time.</p>
    <InputTrial/>
    <p className='terms'>
    Try free for 14 days. No credit card required.

By signing up, you agree to our <span>terms</span> and <span>privacy policy.</span>
    </p>
    
    </div>
  )
}

export default TrialInfo