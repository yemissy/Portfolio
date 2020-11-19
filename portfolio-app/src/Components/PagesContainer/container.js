import React, {useState, useEffect} from 'react';
import Landing from "../LandingPage/landing";
import Projects from '../Projects/projects';
import Braids from '../BraidsAndCrafts/braids';
import styled, {keyframes} from 'styled-components';
import "./container.css"


function Container(props){

    const [view, setView] = useState("")

    //Write a function that onContainerScroll, fixes landing/creates a parralax

    const Container = styled.div`
    border: solid red;
    position: relative;
    width: 100vw;
    height: 100vh;
    /* top: 6.5em; */
    `
    // const containerStyle = {
    //     border: "solid red",
    //     position: `relative`,
    //     width: "100vw",
    //     height: "100vh",
    //     top: "6.5em",
    //     overflowY: "scroll",
    // }



    return(
        <Container>
            <div className="container" >
                <Landing/>
                <Projects />
                <Braids />
            </div>
        </Container>
    )

}

export default Container;
