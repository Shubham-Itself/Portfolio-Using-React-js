import React from "react";
import './index.css'
import github from '../img/github.png'
import linkedin from '../img/linkedin.png'
import instagram from '../img/instagram.png'
import Vector1 from '../img/Vector1.png'
import Vector2 from '../img/Vector2.png'
import crown from '../img/crown.png'
import { IndexRight } from "../Index-right/IndexRight";
import boy from '../img/boy.png'
import thumb from '../img/thumbup.png'
import {motion} from 'framer-motion'
import glass from '../img/glassesimoji.png'



export function Index(){
    return(
        <React.Fragment>
            <div className="container-main">
                <div className="i-leftside">
                    <span className="hy">Hy! I Am</span>
                    <motion.span
                    initial ={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{delay:1.5 , type :'spring'}}
                     className="name">Shubham Kumar</motion.span>
                    <span> Frontend Developer with high level of experience in web designing
            and development, producting the Quality work</span>
            <button className="button button-one">Hire me</button>
            <div className="img-sec">
            <img src={github} alt="" />
            <img src={linkedin} alt="" />
            <img src={instagram} alt="" />
            </div>

                </div>
                <div className="i-rightside">
                    <IndexRight img1={Vector1} img2={Vector2} img3={boy} crown = {crown} txt1="Web Developer" img4={thumb} txt2='Best Design Award' img5={glass} />
                </div>
            </div>

        </React.Fragment>
    )
}