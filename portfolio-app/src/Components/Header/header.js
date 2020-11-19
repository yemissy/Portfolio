import React, {useState, useEffect, useRef, useCallback} from 'react';
import "./header.css";
import MenuIcon from '@material-ui/icons/Menu';
import NavigationSharpIcon from '@material-ui/icons/NavigationSharp';
import styled, {keyframes} from 'styled-components';

const InitialHeader = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    position: fixed;
    top: 0em;
    background-color:   #282c34;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    z-index: 1;
    border: solid green;

    & h1 {
        font-family: 'Lora', serif;
        font-weight: 100;
        font-size:1.7em;
    }
    `
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
    position: fixed;
    z-index: 1;

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

function Header(props){
    const[hHeight, setHHeight] = useState()
    const[headerPos, setHeaderPosition] = useState('')

    // useEffect(() => {
    //     setHHeight(document.body.clientHeight)
    //     console.log(hHeight, headerPos)
    // })

    // const getNavHeightRef = useCallback(node => {
    //     console.log(node, hHeight)
    //     if( node !== null){
    //         const height = document.getElementById('navbar').clientHeight
    //         setHHeight(height)
    //     }
    //     console.log(node, hHeight)
    // })


    
    return(
        props.click == true ?
        <Animate2 >
            <div >
                <MenuIcon fontSize="large"/>
                <h1>YEMISI ONAYEMI</h1>
            </div>
        </Animate2> :
        <InitialHeader>
            <div >
                <Animate>
                    <NavigationSharpIcon fontSize="large"/>
                </Animate>
                <h1>YEMISI ONAYEMI</h1>
            </div>
        </InitialHeader>
    )
}
export default Header;
