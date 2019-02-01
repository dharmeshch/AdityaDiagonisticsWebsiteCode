import React from 'react';

import './About.css'
import labPic from "../Images/LabPic1.jpg"
import {Button} from 'react-bootstrap'
const aboutContent = (props) =>{
    const style ={
        backgroundColor:'#60a5a5 !important',
        margin:'40px auto',
        width:'200px'
      }
    return(
        <div className="about">
            <div className="introduction">
                <span className="main-text">Aditya Diagnostics and Research <br />Laboratory</span>
                <p className="normal-text">We provide a full range of medical diagnostics efficiently and with highest quality. A quality of service you can always Trust!
                            Open today until 22:00</p>
                <Button bsStyle="" className="btn-custom" bsSize="large">
                    Get Directions
                </Button>
            </div>
            <img src={labPic} alt="LabPic" />
        </div>
    )
}

export default aboutContent;