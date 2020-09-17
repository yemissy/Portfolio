import React, {useState, useEffect} from 'react';
import Landing from "../LandingPage/landing";
import Projects from '../Projects/projects';
import Braids from '../BraidsAndCrafts/braids';
import "./container.css"


function Container(props){

    const [view, setView] = useState("")
    
    //Write a function that onContainerScroll, fixes landing/creates a parralax

    const containerStyle = {
        border: "solid red",
        position: `relative`,
        width: "100vw",
        height: "100vh",
        top: "6.5em",
        overflowY: "scroll",
    }



    return(
        <div className="container" style={containerStyle}>
            <Landing/>
            <Projects />
            <Braids />
        </div>
    )

}

export default Container;
