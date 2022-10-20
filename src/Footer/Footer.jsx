import React from "react";
import Wave from '../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'

import './Footer.css'


function Footer(){
    return(
    <React.Fragment>
        <div className="footer-item">
            <img src={Wave} alt="" />
            <div className="f-content">
            <span>Shubhamk2208@gmail.com</span>

            
            <div className="f-icon">
                <Insta color='white' size='3rem'/>
                <Facebook color='white' size='3rem'/>
                <Github color='white' size='3rem'/>
                

            </div>
            </div>

        </div>
    </React.Fragment>

        
    )
}

export default Footer