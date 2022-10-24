import React from "react";
import './navbar.css'
import {Link} from 'react-scroll'



export function Navbar(){
    return(
        <React.Fragment>
            <div className="Container-main">
                <div className="i-navleft">
                    <span>Shubham</span>
                    <span>Toggle</span>
                </div>

                <div className="i-navright">
                    <ul>
                        <Link spy={true} to='Navbar' smooth={true}>
                        <li>Home</li>

                        </Link>
                        <Link spy={true} to='Service' smooth={true}>
                        <li>Service</li>

                        </Link>
                        <Link spy={true} to='Experience' smooth={true}>
                        <li>Experience</li>

                        </Link>
                        <Link spy={true} to='PortFolio' smooth={true}>
                        <li>Portfolio</li>
                        </Link>
                        <Link spy={true} to='Review' smooth={true}>
                        <li>Testimonial</li>

                        </Link>
                        
                    </ul>
                    <Link spy={true} to='Form' smooth={true}>

                    <button className="button button-one">Contact</button>

                    </Link>
                </div>

            </div>
        </React.Fragment>
    )
}