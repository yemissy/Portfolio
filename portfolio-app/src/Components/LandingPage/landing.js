import React, {useState, useEffect} from 'react';
import "./landing.css"

function Landing(props){
    const [ViewName, setViewnName] = useState("LandingPage")


    useEffect(() => {

    })

    return(
        <div className="landing-div" >
            <h1>SOFTWARE ENGINEER</h1>
            <div className="landing-img">
            </div>
        </div>
    )
}
export default Landing;
