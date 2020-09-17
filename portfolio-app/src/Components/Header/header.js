import React, {useState, useEffect} from 'react';
import "./header.css";
import MenuIcon from '@material-ui/icons/Menu';
import NavigationSharpIcon from '@material-ui/icons/NavigationSharp';
import styled, {keyframes} from 'styled-components';


function Header(props){
    const[hHeight, setHHeight] = useState(`${0}vh`)
    const[count, setcount] = useState(0)

    console.log(props.click)

    const bounce = keyframes`
    40%{
        transform: translateY(-0.8em);
    }

    `
    const Animate = styled.div`
    animation: ${bounce} 2s ease-in infinite ;
    `
    const style = keyframes`
    from {
        min-height: 100vh;
    }
    to{
        min-height: 20vh;
    }
    `

    const Animate2 = styled.div`
    animation: ${style} 2s ease-in;
    animation-fill-mode: forwards;
    min-width: 100vw;
    background-color: #ffffff;
    color: #000000;
    display: flex;
    flex-direction: column-reverse;

    & h1 {
        font-family: 'Lora', serif;
        font-weight: 100;
        font-size:1.7em;
    }
    & div {
        min-height:8em;
        display: flex;
        flex-direction:row;
        align-items:center;
        justify-content: space-evenly;
    }
    `


    return(
        props.click == true ?
        <Animate2>
            <div>
                <MenuIcon fontSize="large"/>
                <h1>YEMISI ONAYEMI</h1>
            </div>
        </Animate2> :
        <div className="header">
            <Animate>
                <NavigationSharpIcon fontSize="large"/>
            </Animate>
            <h1>YEMISI ONAYEMI</h1>
        </div>
    )
}
export default Header;
