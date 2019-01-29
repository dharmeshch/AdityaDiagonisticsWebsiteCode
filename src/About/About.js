import React from 'react';

import './About.css'
import labPic from "../Images/LabPic1.jpg"
import {Button} from 'react-bootstrap'
const aboutContent = (props) =>{
    const style ={
        backgroundColor:'green !important',
        margin:'40px auto',
        width:'200px'
      }
    return(
        <div className="about">
            <h1>Aditya Diagnostics and Research <br />Laboratory</h1>
            <p>We provide a full range of medical diagnostics efficiently and with highest quality. A quality of service you can always Trust!
                        Open today until 22:00</p>
            <Button style={style} bsSize="large" block>
                Get Directions
            </Button>
            <br />
            <img src={labPic} alt="LabPic" />
        </div>
    )
}

export default aboutContent;