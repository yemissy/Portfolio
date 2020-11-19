import React, {useState, useEffect, useRef} from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import NavigationSharpIcon from '@material-ui/icons/NavigationSharp';
import './App.css';
import styled, {keyframes} from 'styled-components';
import {Motion, TransitionMotion, spring, presets} from 'react-motion';
import Container from './Components/PagesContainer/container';
import Header from './Components/Header/header.js';


function App() {
    const[appState, setappState] = useState("")
    const[count, setCount] = useState(0)
    const[headerClick, setHeaderClick] = useState(false)
    const headerStyle = useRef({});




    const style = keyframes`
    50%{
        transform: translateY(-7em);
    }
    `

    const Animate2 = styled.div`
        animation: ${style} 2s ease-in infinite;
    `

  return (
    <div className="App">
         <header className="App-header" onClick={() => setHeaderClick(true)}>
            <Header click={headerClick}/>
         </header>
        <Container />
    </div>
  );
}

export default App;
