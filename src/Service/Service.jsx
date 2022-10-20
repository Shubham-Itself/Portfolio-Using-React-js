import React from "react";
import './service.css'
import Resume from '../Service/Shubham-Resume.pdf'
import ServiceRight from './ServiceRight'
import Heart from '../img/heartemoji.png'
import Glass from '../img/glasses.png'
import Humble from '../img/humble.png'
import {motion} from 'framer-motion'



export function Service(){
    return(
        <React.Fragment>
            <div className="service" id="Service" >
                <div className="i-serviceleft">
                    <span
                   
                    >My Awesome</span>
                    <span>services</span>
                    <span>
                    Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
                    </span>
                    <a href={Resume} download>

                    <button className="button button-service">Download CV</button>
                    </a>

                </div>
                <div className="i-serviceright">
                    <ServiceRight emoji1={Heart} text1='Design' text2="Figma, Sketch, Photoshop, Adobe, Adobe xd " emoji2={Glass} text3 = "Developer"  text4 ="HTML, Css, JavaScript, React, NodeJs, Express" emoji3={Humble} text5 = 'UI/UX' text6 = "Lorem ispum dummy text are usually use in section where we need some random text"/>

                </div>
            </div>
        </React.Fragment>
    )
}

export default Service