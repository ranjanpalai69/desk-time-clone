import React from 'react';
import "../../../../src/styles/GreenComp.css";
import { headings } from '../../../Scripts/info';
import Heading from '../Carousel/Heading';
import InputTrial from '../FirstContent/InputTrial';
const GreenComp = () => {
    return (
        <div className='green-comp'>
            <div className="ins-green">
            <Heading heading={headings.green_comp_heading} />
            <InputTrial />
            <p className='terms'>
                Try free for 14 days. No credit card required.

                By signing up, you agree to our <span>terms</span> and <span>privacy policy.</span>
            </p>
            </div>
        </div>
    )
}

export default GreenComp;