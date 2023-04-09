import React, { useState } from "react";
import "./Toggle.css"

const Toggle = () => {
    const [on , setOn] = useState(false);
    const handleClick = () => {
        setOn(!on);
    }
    
    // console.log(on, setOn);
    return(
        <div className={`full-body ${on ? "show" : ""}`}>
            <div onClick={handleClick} className ="toggle">
            <div className={`icon ${on ? "show" : ""}`}></div>
            </div>
            <div className={`little-stories ${on ? "show" : ""}`}>
                {/* <h1>Your Films</h1> */}
                </div>
        </div>
    )
}
export default Toggle;