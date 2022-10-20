import React from "react";
import './serviceRight.css'
import {motion} from 'framer-motion'



function ServiceRight(props){
    
    return(
        <React.Fragment>
            <motion.div
            initial = {{x:150}}
            whileInView={{x:-10}}
            transition={{delay:0.5 ,   type: 'spring'}}

            
            
             className="card-one">
                <img src={props.emoji1} alt="" />
                <span>{props.text1}</span>
                <span>{props.text2}</span>
                <button className="card-button">Learn More</button>
            </motion.div>
            <motion.div
            initial = {{x:-150}}
            whileInView={{x:-10}}
            transition={{delay:0.5 ,   type: 'spring'}}
             
             className="card-two">
                <img src={props.emoji2} alt="" />
                <span>{props.text3}</span>
                <span>{props.text4}</span>
                <button className="card-button">Learn More</button>
            </motion.div>
            <motion.div
            initial = {{x:250}}
            whileInView={{x:-10}}
            transition={{delay:0.5 ,   type: 'spring'}}
             className="card-three">
                <img src={props.emoji3} alt="" />
                <span>{props.text5}</span>
                <span>{props.text6}</span>
                <button className="card-button">Learn More</button>
            </motion.div>
        </React.Fragment>
    )
}

export default ServiceRight