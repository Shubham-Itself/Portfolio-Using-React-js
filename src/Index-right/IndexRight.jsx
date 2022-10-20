import React from "react";
import './indexRight.css'
import {motion} from 'framer-motion'



export function IndexRight(props){
    
    return(
        <React.Fragment>
            <img src={props.img3} alt="" className="boy"/>
            <img src={props.img2} alt="" className="vector2" />
            <img src={props.img1} alt="" className="vector1"/>
            <motion.div
             initial = {{x:50}}
             whileInView={{x:0}}
             transition={{delay:0.5 ,   type: 'spring' ,stiffness:250}}
              
             className="fancy-item1">
                <img src={props.crown} alt="" className="crown" />
                <span className="crown-text">{props.txt1}</span>
                
            </motion.div>
            <motion.div
             initial = {{x:-150}}
             whileInView={{x:0}}
             transition={{delay:0.5 ,   type: 'spring' ,stiffness:250}}
              
                 className="fancy-item2">
                <img src={props.img4} alt="" className="thumb" />
                <span className="thumb-txt">{props.txt2}</span>
                
            </motion.div>
            <motion.div
               initial = {{x:-150}}
               whileInView={{x:0}}
               transition={{delay:0.5 ,   type: 'spring' , stiffness:250}}
                
                 className="fancy-item3">
                <img src={props.img5} alt="" className="glass" />
                
                
            </motion.div>
            



        </React.Fragment>
    )
}