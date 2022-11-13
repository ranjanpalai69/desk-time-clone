import React from 'react'
import { headings } from '../../../Scripts/info';
import "../../../../src/styles/AccordionComp.css";
import Heading from '../Carousel/Heading';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { accordion_data } from '../../../Scripts/info';
const AccordionComp = () => {
    return (
        <div className='accordion-comp'>
            <Heading heading={headings.accodion_heading} />
            <div className='accordion-cont'>
                {
                    accordion_data?.map((item)=>{
                        return (
                            <Accordion key={Math.random()+Date.now()} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontWeight:"bold",fontSize:"large"}}>{item.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {item.desc}
          </Typography>
        </AccordionDetails>
      </Accordion>
                        );
                    })
                }
            </div>      

        </div>
    )
}

export default AccordionComp