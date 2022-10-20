import React from "react";
import './experience.css'


function Experience(){
    return(
        <React.Fragment>
            <div className="experience-container" id="Experience">
                <div className="year">
                    <span>6+</span>
                    <span>months</span>
                    <span>Experience</span>

                </div>
                <div className="project">
                <span>12+</span>
                    <span>completed</span>
                    <span>Project</span>

                </div>
                <div className="work">
                <span>0+</span>
                    <span>company</span>
                    <span>Work</span>

                </div>
            </div>
        </React.Fragment>
    )
}

export default Experience