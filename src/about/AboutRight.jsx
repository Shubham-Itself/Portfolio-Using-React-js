import React from "react";
import "./aboutright.css";
import {motion} from 'framer-motion'

function AboutRight(props) {
  return (
    <React.Fragment>
     <motion.div
     initial={{rotata:0}}
     whileInView={{rotate:360}}
     transition={{delay:0.5 , type:'spring'}}
      className="aboutRight-main">
      <div className="icon-itemabout">
        <img src={props.img1} alt="" />
      </div>
      <div className="icon-itemabout">
        <img src={props.img2} alt="" />
      </div>
      <div className="icon-itemabout">
        <img src={props.img3} alt="" />
      </div>
      <div className="icon-itemabout">
        <img src={props.img4} alt="" />
      </div>
      <div className="icon-itemabout">
        <img src={props.img5} alt="" />
      </div>

      <div className="about-decor blue-item">blue</div>
      <div className="about-decor yellow-item">yellow</div>
     </motion.div>
    </React.Fragment>
  );
}

export default AboutRight;
