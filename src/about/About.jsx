import React from "react";
import './about.css'
import Amazon from '../img/amazon.png'
import Facebook from '../img/Facebook.png'
import Fiver from '../img/fiverr.png'
import Upwork from '../img/Upwork.png'
import Shopify from '../img/Shopify.png'
import AboutRight from "./AboutRight";


function About() {
  return (
    <React.Fragment>
      <div className="About" id="Aboutbox">
        <div className="i-serviceleft">
          <span>Works for All these</span>
          <span>Brands & Clients</span>
          <span>
            Lorem ispum is simpley dummy text of printing of printing Lorem
            <br />
            ispum is simpley dummy text of printing <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, cumque. <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing. <br />
            Lorem ipsum dolor sit amet consectetur 
          </span>
          
            <button className="button button-service">Hire me</button>
            
          
        </div>

         <div className="i-aboutright">
        <AboutRight img1 = {Upwork} img2={Fiver} img3={Amazon} img4={Shopify} img5={Facebook}/>

         </div>
      </div>
    </React.Fragment>
  );
}

export default About
